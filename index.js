#! /usr/bin/env node
const program=require('commander')
const {helpOptions}=require('./core/helpOptions')
const {createComands}=require('./core/create')
helpOptions()
createComands()
program.parse(process.argv)
