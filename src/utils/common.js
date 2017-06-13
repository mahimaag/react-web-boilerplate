/**
 * Created by intelligrape on 8/6/17.
 */
import {cloudinaryUrls, contentType, contractName} from '../constants'
import moment from 'moment';
import _ from 'lodash';

/*
* Generate cloudinary url
 * */

export const getImage = (publicUrl, cType,  options) => {
    let url = '';

    // Decide base url based on contentType
    if(cType == contentType.FORWARD_EPG || cType == contentType.REVERSE_EPG){
        url = cloudinaryUrls.CLOUD_SUB_ACCOUNT_URL;
    }else{
        url = cloudinaryUrls.CLOUD_ACCOUNT_URL;
    }

    // Adding options with request url eg: height, width
    if (options && options.height) {
        url += 'h_' + options.height;
    }
    if (options && options.width) {
        if(options.height) {
            url += ','
        }
        url += 'w_' + options.width;
    }

    return url + '/' + publicUrl;
};

/*
* Format given date */

export const formatDate = (date, format='DD MMMM') => {
    return moment(date).format(format);
};

/*
* Get intersection of subscribe channel
* */

export const isContentVisible = (cType, cName, userPackages, validPackages) => {
    if(_.includes([contentType.TV_SHOWS, contentType.WEB_SHORTS, contentType.MOVIES], cType) && _.includes([contractName.SUBSCRIPTION, contractName.RENTAL], cName)) {
        if((_.intersection(_.map(userPackages, 'pkgId'), validPackages)).length > 0){
            return true;
        }
        return false;
    }
    return false;
};