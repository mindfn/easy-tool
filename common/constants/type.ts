// 静态资源类型
export enum STATIC {
  I18N = 0, // 多语言
  IMG, // 图片
  ICON, // ICON图标
  SKIN, // 皮肤
  DIST // 前端包
}

export const STATIC_ARR = [
  STATIC.I18N,
  STATIC.IMG,
  STATIC.ICON,
  STATIC.SKIN,
  STATIC.DIST
]

export const STATIC_VIEW = [{
  label: '多语言',
  value: STATIC.I18N,
  color: 'blue300'
}, {
  label: '图片',
  value: STATIC.IMG,
  color: 'red300'
}, {
  label: '图标',
  value: STATIC.ICON,
  color: 'deepOrange300'
}, {
  label: '皮肤',
  value: STATIC.SKIN,
  color: 'lightGreen300'
}, {
  label: '前端包',
  value: STATIC.DIST,
  color: 'cyan300'
}]

// 多语言列表
export const STATIC_I18N_TABLE_COLUMNS = [
  'resource',                       // Resource (来源)      
  'key',                            // Key (关键信息)
  'version',                        // Version (版本)
  'length',                         // Length (长度)
  'position',                       // Position (位置)  
  'remark',                         // Remark (备注)
  'chinese',                        // 0_中文 (Simplified Chinese -简体中文)
  'english',                        // 1_English (English-英文)
  'russian',                        // 2_Русский (Russian-俄语)
  'estonia',                        // 3_Eesti (Estonian-爱沙尼亚语)
  'bulgarian',                      // 4_Български (Bulgarian-保加利亚语)
  'hungarian',                      // 5_Magyar (Hungarian-匈牙利语)
  'greek',                          // 6_Ελληνικά (Greek-希腊语)
  'german',                         // 7_Deutsch (German-德语)
  'italian',                        // 8_Italiano (Italian-意大利语)
  'czech',                          // 9_Český (Czech-捷克语)
  'slovak',                         // 10_Slovensko (Slovak-斯洛伐克语)
  'france',                         // 11_Français (France-法语)
  'polish',                         // 12_Polski (Polish-波兰语)
  'dutch',                          // 13_Nederlands (Dutch-荷兰语)
  'portuguese',                     // 14_Português (Portuguese-葡萄牙语)
  'spanish',                        // 15_Español (Spanish-西班牙语)
  'romanian',                       // 16_Român (Romanian-罗马尼亚语)
  'danish',                         // 17_Dansk (Danish-丹麦语)
  'swedish',                        // 18_Svenska (Swedish-瑞典语)
  'norwegian',                      // 19_Norsk (Norwegian-挪威语)
  'finnish',                        // 20_Suomi (Finnish-芬兰语)
  'croatian',                       // 21_Hrvatski (Croatian-克罗地亚语)
  'slovenian',                      // 22_Slovenščina (Slovenian-斯洛文尼亚语)
  'serbian',                        // 23_Srpski (Serbian-塞尔维亚语)
  'turkish',                        // 24_Türkçe (Turkish-土耳其语)
  'korean',                         // 25_한국어 (Korean-韩语)
  'traditionalChinese',             // 26_繁體中文 (Traditional Chinese-繁体中文)
  'thai',                           // 27_ภาษาไทย (Thai-泰语)
  'vietnamese',                     // 28_Tiếng Việt (Vietnamese-越南语)
  'japanese',                       // 29_日本語 (Japanese-日语)
  'hebrew',                         // 30_עברית שפה (Hebrew-希伯来语)
  'latvian',                        // 31_Latvijas (Latvian-拉脱维亚语)
  'lithuanian',                     // 32_lietuviešu (Lithuanian-立陶宛语)
  'brazilianPortuguese',            // 33_Português - BRAZIL(Brazilian Portuguese-巴西葡萄牙语 )
  'arabic',                         // 34_العربية(Arabic-阿拉伯语)
  'persian'                         // 35_فارسی(Persian-波斯语)
]

// 多语言列表标题
export const STATIC_I18N_TABLE_TITLES = [
  '来源',
  '关键信息', 
  '版本',
  '长度',
  '位置',
  '备注',
  '简体中文', 
  '英文',
  '俄语',
  '爱沙尼亚语',
  '保加利亚语',
  '匈牙利语',
  '希腊语',
  '德语',
  '意大利语',
  '捷克语',
  '斯洛伐克语',
  '法语',
  '波兰语',
  '荷兰语',
  '葡萄牙语',
  '西班牙语',
  '罗马尼亚语',
  '丹麦语',
  '瑞典语',
  '挪威语',
  '芬兰语',
  '克罗地亚语',
  '斯洛文尼亚语',
  '塞尔维亚语',
  '土耳其语',
  '韩语',
  '繁体中文',
  '泰语',
  '越南语',
  '日语',
  '希伯来语', 
  '拉脱维亚语',
  '立陶宛语',
  '巴西葡萄牙语',
  '阿拉伯语',
  '波斯语'
]

export const STATIC_I18N_DOWNLOAD_TYPE = [{
  label: 'xlsx',
  value: 'xlsx'
}, {
  label: 'json',
  value: 'json'
}, {
  label: 'properties',
  value: 'properties'
}]

