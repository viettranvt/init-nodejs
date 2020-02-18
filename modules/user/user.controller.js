const log4js = require('log4js');
const logger = log4js.getLogger('Controllers');
const Joi = require('@hapi/joi');
const requestUtil = require('../../utils/RequestUtil');
const HttpStatus = require("http-status-codes");

const rederIndexPage = (req, res, next) => {
  logger.info('UserController::rederIndexPage::is called');
  try{
    //JOI VALIDATE

    // const { error } = Joi.validate(request.body, LoginValidationSchema);
    // if (error) {
    //   return requestUtil.joiValidationResponse(error, res);
    // }
    
    return res.status(HttpStatus.OK).json({ messages: ['ok']});
  }catch(e){
    logger.error('UserController::rederIndexPage::error', e);
    return next(e);
  }
}

module.exports = {
  rederIndexPage
};
