'use strict';

export default (input: string): string => {
  const regex = /((?<SCHEME>(?:https))(?<HOSTNAME>\:\/\/(?:www.|[a-zA-ZÀ-ž.]+)[a-zA-ZÀ-ž0-9\-\.]+\.(?:[\w]{1,}))?(?<PORT>\:[0-9][0-9]{0,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])?(?<PATH>[a-zA-ZÀ-ž0-9\-\.\/\+]+)?(?<QUERY>(?:\?$|[a-zA-ZÀ-ž0-9\.\,\;\?\'\\\+&%\$\=~_\-\*]+))?(?<HASH>(?:#[a-zA-ZÀ-ž0-9\.\,\;\?\'\\\+&%\$\=~_\-\*]+))?)/gim;
  const out = regex.exec(input);
  if (out) {
    return out[0];
  } else {
    return '';
  }
};
