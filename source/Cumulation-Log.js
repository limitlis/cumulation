/**
* @license MIT
* @author <steven@velozo.com>
*/

/**
* Cumulation Logging
*
* @class CumulationLog
*/

class CumulationLog
{
	constructor(pDepencies, pSettings)
	{
		this._Dependencies = pDepencies;
		this._Settings = pSettings;
	}

	writeConsole(pLevel, pMessage, pObject)
	{
		// Write the message
		console.log('['+pLevel+'] ('+this._Settings.Entity+') '+pMessage);

		// Write out the object if it is passed in
		if (typeof(pObject) !== 'undefined')
		{
			console.log(JSON.stringify(pObject, null, 4));
		}
	}

	trace(pMessage, pObject)
	{
		this.writeConsole('TRACE', pMessage, pObject);
	}

	debug(pMessage, pObject)
	{
		this.writeConsole('DEBUG', pMessage, pObject);
	}

	info(pMessage, pObject)
	{
		this.writeConsole('INFO', pMessage, pObject);
	}

	warning(pMessage, pObject)
	{
		this.writeConsole('WARNING', pMessage, pObject);
	}

	error(pMessage, pObject)
	{
		this.writeConsole('ERROR', pMessage, pObject);
	}


	// Log the current date and time, well formatted (with Moment-Timezone)
	logTime(pMessage)
	{
		let tmpMessage = (typeof(pMessage) !== 'undefined') ? pMessage : 'Time';
		this.info(tmpMessage+': '+this._Dependencies.moment().format('MMMM Do YYYY, HH:mm:ss.SSS'))
	}

	// Get a timestamp 
	getTimeStamp()
	{
		return +new Date();
	}

	getTimeDelta(pTimeStamp)
	{
		let tmpEndTime = +new Date();
		return tmpEndTime-pTimeStamp;
	}

	// Log the delta between a timestamp, and now with a message
	logTimeDelta(pTimeStamp, pMessage)
	{
		let tmpMessage = (typeof(pMessage) !== 'undefined') ? pMessage : 'Time Measurement';

		let tmpEndTime = +new Date();
		let tmpOperationTime = tmpEndTime-pTimeStamp;

		this.info(tmpMessage +' ('+tmpOperationTime+'ms)');
	}

}

module.exports = CumulationLog;