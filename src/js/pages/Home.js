// import Packages
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Map, Marker, Popup, TileLayer, Icon} from 'react-leaflet'
import {connect} from 'react-redux'

// import Actions
import {getLocation, getReport} from 'dataActions'

// import Stores
@connect((store)=>{
  return{
    locations : store.locations.locations,
    locations_fetching : store.locations.fetching,
    locations_fetched : store.locations.fetched,
    locations_error : store.locations.error,
    reports : store.reports.reports,
    reports_fetching : store.reports.fetching,
    reports_fetched : store.reports.fetched,
    reports_error : store.reports.error,
  }
})

class Home extends Component {
  constructor() {
    super();
    this.state = {
      // center : [-6.21462, 106.84513]
      // zoom: 10,
      show_location : false,
      show_report : false,
    };
  }

  componentWillMount() {
    this.props.dispatch(getLocation())
    this.props.dispatch(getReport())
  }

  onToggleLocation=()=>{
    this.setState({show_location: !this.state.show_location})
  }

  onToggleReport=()=>{
    this.setState({show_report: !this.state.show_report})
  }

  render() {
    let {show_location, show_report} = this.state;
    let {locations, locations_fetching, locations_error, reports, reports_fetching, reports_error} = this.props;
    if (locations.length>0) {
      locations = locations.map((item, i)=>{
        let {lat, lng, name, address} = item;
        let position = [lat, lng];
        let icon = L.icon({
          iconUrl : 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
        });
        return(
          <Marker
            key={i}
            icon={icon}
            position={position}
          >
            <Popup>
              <p class='text-center'>
                <b>{name}</b><br/>
                {address}
              </p>
            </Popup>
          </Marker>
        )
      });
    }
    if (reports.length>0) {
      reports = reports.map((item, i)=>{
        let {location, type, subtype, street, city, country} = item;
        let position = [location.y, location.x];
        return(
          <Marker
            key={i}
            position={position}
          >
            <Popup>
              <p class='text-center report'>
                <b>{type}</b><br/>
                {street}
              </p>
            </Popup>
          </Marker>
        )
      });
    }

    return(
      <section id='home'>
        <Helmet title='SmartCity' />
        <Map center={[-6.21462, 106.84513]} zoom={11}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <div style={{display: 'none'}}>
            {show_location&&locations}
            {show_report&&reports}
          </div>
        </Map>
        <div class='btn-container'>
          <button
            class='btn'
            onClick={this.onToggleLocation}
            disabled={locations_fetching||locations_error!=null?true:false}
          >
            {show_location?'Hide':'Show'} Location
          </button>

          <button
            class='btn'
            onClick={this.onToggleReport}
            disabled={reports_fetching||reports_error!=null?true:false}
          >
            {show_report?'Hide':'Show'} Report
          </button>
        </div>
      </section>
    )
  }
}

export default Home
