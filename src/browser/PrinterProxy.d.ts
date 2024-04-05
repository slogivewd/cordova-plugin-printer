declare namespace PrinterProxy {
	type SuccessCallback = () => void;
	type ErrorCallback = (error: Error) => void;

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface InterfaceArguments {}

	/**
	 * Verifies if printing is supported on the device.
	 *
	 * @param success Success callback function.
	 * @param error Error callback function.
	 * @param args Interface arguments.
	 */
	function check(
		success: SuccessCallback,
		error: ErrorCallback,
		args: InterfaceArguments[],
	): void;

	/**
	 * List of printable document types.
	 *
	 * @param success Success callback function.
	 * @param error Error callback function.
	 * @param args Interface arguments.
	 */
	function types(
		success: SuccessCallback,
		error: ErrorCallback,
		args: InterfaceArguments[],
	): void;

	/**
	 * Sends the content to the Printing Framework.
	 *
	 * @param success Success callback function.
	 * @param error Error callback function.
	 * @param args Interface arguments.
	 */
	function print(
		success: SuccessCallback,
		error: ErrorCallback,
		args: InterfaceArguments[],
	): void;
}

export = PrinterProxy;
