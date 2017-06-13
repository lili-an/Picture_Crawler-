require('./connect');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*定义模式Student_Schema*/
var Picture_Schema = new Schema({
    url: String,
    alt: String,
    date: Date
    }, {
      versionKey: false
    });

/*定义模型Picture，数据库存的是Pictures*/
var MyPicture = mongoose.model("Picture", Picture_Schema);
exports.MyPicture=MyPicture;

/*mongoose.Schema({
  username: {// 真实姓名
    type: String,
    required: true
  },
  password: { // 密码
    type: String,
    required: true
  }
});*/