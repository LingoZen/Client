import {Language} from "../models/language.models";

export interface SearchQuery {
  searchString: string,
  language: Language
}
