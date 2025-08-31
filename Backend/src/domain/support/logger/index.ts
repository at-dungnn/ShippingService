export type AdditionalData =
  | Error
  | {
      [key: string]: unknown;
    };

/**
 * Logger
 * Each log level refers to "3.5.2 What to Record?" in "System Operation Anti-Patterns".
 * @interface Logger
 */
export type Logger = {
  /**
   * Any information related to what is happening within the program. Debug messages, for example.
   *
   * @param {string} message Log message
   * @param {AdditionalData} data Additional data
   * @memberof Logger
   */
  debug(message: string, data?: AdditionalData): void;
  /**
   * Actions initiated by the user, execution of scheduled tasks, system startup or shutdown, and other system operations.
   *
   * @param {string} message Log message
   * @param {AdditionalData} data Additional data
   * @memberof Logger
   */
  info(message: string, data?: AdditionalData): void;
  /**
   * A potential state that may cause errors in the future. Examples include deprecation warnings, insufficient available resources, and performance degradation.
   *
   * @param {string} message Log message
   * @param {AdditionalData} data Additional data
   * @memberof Logger
   */
  warn(message: string, data?: AdditionalData): void;
  /**
   * All error states.
   *
   * @param {string} message Log message
   * @param {AdditionalData} data Additional data
   * @memberof Logger
   */
  error(message: string, data?: AdditionalData): void;
  /**
   *
   * Add keys to append to the log
   *
   * @param params
   * @memberof Logger
   * @example
   * logger.appendKeys({ userId: "user1" });
   */
  appendKeys(params: { [key: string]: unknown }): void;

  /**
   * Reset the keys added to the log.
   */
  resetKeys(): void;
};
