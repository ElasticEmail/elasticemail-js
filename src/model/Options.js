/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EncodingType from './EncodingType';

/**
 * The Options model module.
 * @module model/Options
 * @version 4.0.16
 */
class Options {
    /**
     * Constructs a new <code>Options</code>.
     * E-mail configuration
     * @alias module:model/Options
     */
    constructor() { 
        
        Options.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Options</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Options} obj Optional instance to populate.
     * @return {module:model/Options} The populated <code>Options</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Options();

            if (data.hasOwnProperty('TimeOffset')) {
                obj['TimeOffset'] = ApiClient.convertToType(data['TimeOffset'], 'Number');
            }
            if (data.hasOwnProperty('PoolName')) {
                obj['PoolName'] = ApiClient.convertToType(data['PoolName'], 'String');
            }
            if (data.hasOwnProperty('ChannelName')) {
                obj['ChannelName'] = ApiClient.convertToType(data['ChannelName'], 'String');
            }
            if (data.hasOwnProperty('Encoding')) {
                obj['Encoding'] = EncodingType.constructFromObject(data['Encoding']);
            }
            if (data.hasOwnProperty('TrackOpens')) {
                obj['TrackOpens'] = ApiClient.convertToType(data['TrackOpens'], 'Boolean');
            }
            if (data.hasOwnProperty('TrackClicks')) {
                obj['TrackClicks'] = ApiClient.convertToType(data['TrackClicks'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * By how long should an e-mail be delayed (in minutes). Maximum is 35 days.
 * @member {Number} TimeOffset
 */
Options.prototype['TimeOffset'] = undefined;

/**
 * Name of your custom IP Pool to be used in the sending process
 * @member {String} PoolName
 */
Options.prototype['PoolName'] = undefined;

/**
 * Name of selected channel.
 * @member {String} ChannelName
 */
Options.prototype['ChannelName'] = undefined;

/**
 * @member {module:model/EncodingType} Encoding
 */
Options.prototype['Encoding'] = undefined;

/**
 * Should the opens be tracked? If no value has been provided, Account's default setting will be used.
 * @member {Boolean} TrackOpens
 */
Options.prototype['TrackOpens'] = undefined;

/**
 * Should the clicks be tracked? If no value has been provided, Account's default setting will be used.
 * @member {Boolean} TrackClicks
 */
Options.prototype['TrackClicks'] = undefined;






export default Options;

