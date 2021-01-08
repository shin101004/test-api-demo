export interface IForm {
  title : string;
  url : string;
  result : any|any[];
  onClick : (url:string)=> void;
  loading : boolean;
  name : string;
}

export type TSubject = {
  subject : string;
}