"use strict";

const passport = require("passport");
const google = require("./GoogleStrategy");
const local = require("./localStrategy");
const logger = require("../logger");
const model = require("../../models/index");


// TODO: 회원 등록절차는 따로 만들어야함
module.exports = () => {
    // 세션에 저장 로그인이 최초로 성공했을 때만 호출되는 함수
    passport.serializeUser(async (user,done)=>{});
    
    // 사용자가 페이지를 방문할 때마다 호추로디는 함수
    passport.deserializeUser((id,done)=>{
        done(null, id);
    });
    
    google();
};