"use strict";global.chai=require("chai"),global.should=require("chai").should(),global.expect=require("chai").expect,global.AssertionError=require("chai").AssertionError,global.swallow=function(i){try{i()}catch(r){}};var sinonChai=require("../lib/sinon-chai");chai.use(sinonChai);