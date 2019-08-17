import React, {Component} from 'react';
import { Card,Button } from 'semantic-ui-react';
import Layout from '../components/Layout'

//import existing factory instance
import factory from '../ethereum/factory';

class CampaignIndex extends Component {

//netx.js doesn't execute the componentDidMount method on server
// getInitialProps is specific from next.js: get the initial data without rendering the component
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns }
  }


  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
        return {
          header : address,
          description : <a>View Campaign</a>,
          fluid : true
        };
    });

    return <Card.Group items = {items} />;
}


  render() {
    /*
    return <div>{this.props.campaigns[0]}</div>
    */
    return (
    <Layout>
    <div>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    <h3>Open Campaigns</h3>
    {this.renderCampaigns()}
    <Button
        content = "Create Campaign"
        icon = "add circle"
        primary = {true}
        />

    </div>
    </Layout>);
  }
}

export default CampaignIndex;
