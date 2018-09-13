/**
 * @desc: 根据拼音格式化名称
 * @desc: 格式化拼音姓名后两个字的首字母，并转为大写，如：zhangsan，返回应该是ZS
 * @param {String} name 名称（拼音）
 * @return {String} 首字母大写
 */
export const spellFormat = function (name: string) {
  // 声母
  const FirstSingleChat = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's']
  const FirstChat = ['zh', 'ch', 'sh']
  // 韵母（单韵母、复韵母）
  const MinorSingleChat = ['a', 'o', 'e', 'i', 'u', 'v']
  const MinorChat = ['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 've', 'er', 'an', 'en', 'in', 'un', 'vn']
  const MinorThreeChat = ['ang', 'eng', 'ing', 'ong']

  const FirstSingleChatStr = FirstSingleChat.join(')(')
  const FirstChatStr = FirstChat.join(')(')
  const MinorChatStr = MinorChat.join(')(')
  const MinorSingleChatStr = MinorSingleChat.join(')(')
  const MinorThreeChatStr = MinorThreeChat.join(')(')

  // 正则规则：
  // 一个声母 + 可能有一个单韵母 + 一个复韵母
  // TODO：这个有一个BUG，当姓名出现en+g+韵母的形式时，比如chenguanbin，解出来的是cheng bin
  //       ------------- 上面的BUG我换了种正则，我把复韵母中三个字的韵母给分离出来，让匹配复韵母的时候只能匹配到两个字的
  //       ------------- 这样虽然不影响这里return，但是确实匹配的不完成准确，如zhangshang，解出来的是zhan shan
  let reg = new RegExp(`([(${FirstSingleChatStr})]{1}|[(${FirstChatStr})]{2})[(${MinorSingleChatStr})]?([(${MinorChatStr})]{1,2}|[(${MinorThreeChatStr})]{1,3})`, 'ig')
  let arr = name.match(reg)
  if(!arr || !arr.length) return ''
  let _arr = arr.slice(arr.length - 2, arr.length)
  return (_arr[0].charAt(0) + _arr[1].charAt(0)).toUpperCase()
}