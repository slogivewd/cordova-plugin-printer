/**
 * Verifies if printing is supported on the device.
 *
 * @param [ Function ] success Success callback function.
 * @param [ Function ] error   Error callback function.
 * @param [ Array ]    args    Interface arguments.
 *
 * @return [ Void ]
 */

exports.check = function (success, fail, args) {
	success(args.length === 0 && window.hasOwnProperty('print'));
};

/**
 * List of printable document types.
 *
 * @param [ Function ] success Success callback function.
 * @param [ Function ] error   Error callback function.
 * @param [ Array ]    args    Interface arguments.
 *
 * @return [ Void ]
 */

exports.types = function (success, fail, args) {
	success([]);
};

/**
 * Sends the content to the Printing Framework.
 *
 * @param [ Function ] success Success callback function.
 * @param [ Function ] error   Error callback function.
 * @param [ Array ]    args    Interface arguments.
 *
 * @return [ Void ]
 */

exports.print = function (success, fail, args) {
	window.print();
	success();
};

cordova.commandProxy.add('Printer', exports);
