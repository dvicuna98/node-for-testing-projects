import {Body, Controller, Get, HttpCode, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {HttpService} from "@nestjs/axios";
import * as xlsx from "xlsx"
@Controller('/api/v1/applicants')
export class AppController {

  workbook: xlsx.WorkBook;

  worksheet: xlsx.WorkSheet;
  constructor(
      private readonly appService: AppService,
      private readonly httpService: HttpService,
      ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getPrograms(@Param('program') program:string){
    const ROOT = require('path').resolve("./")

    const pluck = (arr, key) => arr.map(i => i[key]);

    console.log(ROOT)

    const documentPath:string = `${ROOT}/storage/programas.xlsx`

    this.workbook = xlsx.readFile(documentPath)

    this.worksheet = this.workbook.Sheets[this.workbook.SheetNames[0]];

    let fileResults = xlsx.utils.sheet_to_json(this.worksheet);

    let programs = pluck(fileResults,'programs')

    // this.httpService.post(`http://docker-chatwoot.com:3000/api/v1/accounts/2/custom_attribute_definitions`,
    //     {
    //       "attribute_display_name": "Programs",
    //       "attribute_display_type": 6,
    //       "attribute_description": "programs",
    //       "attribute_key": "programs",
    //       "attribute_values": programs,
    //       "attribute_model": 0
    //     }, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "api_access_token": "tx2qRuWVibbswM2cHXPiFSti"
    //   }
    //     }).subscribe(
    //     {
    //       complete: () =>console.log('completed'),
    //       error: (err) => console.log(err)
    //     }
    // )
  }

  // @Post()
  // studyCriteriaSelected(@Body()body:any){
  //   console.log('---------------------Post-------------------------')
  //   console.log(body)
  //   console.log('--------------------------------------------------')
  //   console.log(body.meta.sender)
  //   console.log('---------------------Post-------------------------')
  //
  //   // this.httpService.post(`chatwoot-rails-1:3000/api/v1/accounts/2/conversations/${body.messages[0]['conversation_id']}/messages`,
  //   //     {
  //   //   "content": "Select one of the programs below",
  //   //   "content_type": "input_select",
  //   //   "content_attributes": {
  //   //     "items": [
  //   //       { "title": "Option1", "value": "Option 1" },
  //   //       { "title": "Option2", "value": "Option 2" }
  //   //     ]
  //   //   },
  //   //   "private":false
  //   // }, {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     "api_access_token": "fXdd6yTAWHic26DethnNnWGU"
  //   //   }
  //   //     }).subscribe(
  //   //     {
  //   //       complete: () =>console.log('completed'),
  //   //       error: (err) => console.log(err)
  //   //     }
  //   // )
  // }

  @Post()
  @HttpCode(201)
  createTest(@Body()body:any){

    console.log(body)

    return {'message':'all good'};
  }
}
