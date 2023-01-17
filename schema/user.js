const joi = require('joi')


// 定义用户名和密码的验证规则
const username = joi.string().alphanum().required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义id，nickname，email的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

// 定义验证头像的验证规则
const avatar = joi.string().dataUri().required()

// 定义验证注册和登录表单的数据对象
exports.reg_login_schema = {
body:{
    username,
    password,
}
}
// 验证规则对象-更新用户信息
exports.update_userinfo_schema = {
    body:{
        id,
        nickname,
        email
    }
}
// 验证规则对象-更新密码
exports.update_password_schema = {
    body:{
        oldPwd:password,
        newPwd:joi.not(joi.ref('oldPwd')).concat(password)
    }
}

// 验证规则对象-头像验证
exports.update_avatar_schema = {
    body:{
        avatar
    }
}