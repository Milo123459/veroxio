/**
 * @typedef VeroxioReturns
 * @type {Object}
 * @property {String} keyword
 * @property {String} nextArg
 * @property {String[]} args
 * @property {String} argsString
 */
/**
 * @typedef GrammarData
 * @type {Object}
 * @property {String} call
 * @property {String} start
 * @property {String} end
 */
/**
 * @param {String} str A string
 * @param {Array<GrammarData>} grammar Grammar
 */
function Parse(str, grammar) {
  var startEnds = [];
  grammar.map((x) =>
    startEnds.push({
      call: x.call,
      start: x.start,
      end: x.end,
    })
  );
  var res = [];
  str.split(/\n/g).map((xvx) => {
    xvx.split(" ").map((ch, i) => {
      if (grammar.filter((x) => x.call == ch).length) {
        var start = startEnds.filter((x) => x.call == ch)[0];
        if (
          xvx.split(/ +/g)[1][0] == start.start &&
          xvx[xvx.length - 1] == start.end
        ) {
          res.push({
            keyword: ch,
            nextArg: xvx.split(" ")[i + 1],
            args: xvx.split(" ").slice(1),
            argsString: xvx.slice(ch.length + 1),
          });
        }
      }
    });
  });
  return res;
}
module.exports = Parse;
/**
 * @param {Array<VeroxioReturns>} res The result to parse
 * @param {String} keyword The keyword to look for
 */
module.exports.keywords = (res, keyword) => {
  return res.filter((key) => key.keyword == keyword);
};