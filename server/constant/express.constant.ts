export enum EXPRESS_UPLOAD_TYPE {
  SKIP = 0, // 跳过，只是将数据插入已有数据，如果已有数据中不存在，则视为无效
  COVER // 覆盖，将数据覆盖当前数据，如果有其他语言，将语言插入当前覆盖的数据中
}


export const EXPRESS = {
  RES: {
    EXCEL_SHEET_EMPTY: '上传的xlsx格式文件没有数据！',
    EXCEL_CAPTION_ERR: '上传的xlsx格式文件表头信息不符合模板格式！',
    UPLOAD_TRANSLATE_NOT_UPLOAD_DEV: '未进行开发导入，请先导入开发态多语言！',
    UPLOAD_TRANSLATE_NOT_UPLOAD_FRONT: '请先导入前端多语言！',
    UPLOAD_TRANSLATE_NOT_UPLOAD_BACK: '请先导入后端多语言！',
    UPLOAD_SUCCESS: '上传成功！',
    UPLOAD_FORMAT_ERR: '导入的文件格式不正确！',
    UPLOAD_SUP_EMPTY: '当前多语言列表中不存在多语言信息！',
    UPLOAD_SUB_OTHER_LANG: '不允许导入非中文的其他语言信息。',
    UPLOAD_VERSION_ERR: '导入的版本错误！当前需导入的版本为：',
    UPLOAD_DATA_ERR: '导入缺少关键信息或中文！',
    UPLOAD_COMPLETE_NEW: '为防止误导入其他多语言文件，请确认是否是导入当前多语言，如果是请添加新的多语言并删除当前多语言！',

    UPLOAD_JSON_ERR: '上传的JSON文件内容不是有效的对象!',
    UPLOAD_JSON_EMPTY: '上传的JSON文件不能为空！',

    UPLOAD_PROPERTIES_EMPTY: '上传的properties文件不能为空！',
    UPLOAD_PROPERTIES_NO_VALUE: '上传的properties文件只有key没有value！'
  },  

  // EXCEL模板文件
  TEMP_EXCEL: {
    // 表头
    CAPTION: [
      'Resource (来源)',
      'Key (关键信息)', 
      'Version (版本)',
      'Length (长度)',
      'Position (位置)',
      'Remark (备注)',
      '0_中文 (Simplified Chinese -简体中文)', 
      '1_English (English-英文)',
      '2_Русский (Russian-俄语)',
      '3_Eesti (Estonian-爱沙尼亚语)',
      '4_Български (Bulgarian-保加利亚语)',
      '5_Magyar (Hungarian-匈牙利语)',
      '6_Ελληνικά (Greek-希腊语)',
      '7_Deutsch (German-德语)',
      '8_Italiano (Italian-意大利语)',
      '9_Český (Czech-捷克语)',
      '10_Slovensko (Slovak-斯洛伐克语)',
      '11_Français (France-法语)',
      '12_Polski (Polish-波兰语)',
      '13_Nederlands (Dutch-荷兰语)',
      '14_Português (Portuguese-葡萄牙语)',
      '15_Español (Spanish-西班牙语)',
      '16_Român (Romanian-罗马尼亚语)',
      '17_Dansk (Danish-丹麦语)',
      '18_Svenska (Swedish-瑞典语)',
      '19_Norsk (Norwegian-挪威语)',
      '20_Suomi (Finnish-芬兰语)',
      '21_Hrvatski (Croatian-克罗地亚语)',
      '22_Slovenščina (Slovenian-斯洛文尼亚语)',
      '23_Srpski (Serbian-塞尔维亚语)',
      '24_Türkçe (Turkish-土耳其语)',
      '25_한국어 (Korean-韩语)',
      '26_繁體中文 (Traditional Chinese-繁体中文)',
      '27_ภาษาไทย (Thai-泰语)',
      '28_Tiếng Việt (Vietnamese-越南语)',
      '29_日本語 (Japanese-日语)',
      '30_עברית שפה (Hebrew-希伯来语)', 
      '31_Latvijas (Latvian-拉脱维亚语)',
      '32_lietuviešu (Lithuanian-立陶宛语)',
      '33_Português - BRAZIL(Brazilian Portuguese-巴西葡萄牙语 )',
      '34_العربية(Arabic-阿拉伯语)',
      '35_فارسی(Persian-波斯语)'
    ]
  }
}


