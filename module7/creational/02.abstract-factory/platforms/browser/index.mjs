import ViewFactory from "../../shared/base/viewFactory.mjs";
import TableBrowserComponent from "./table.mjs";

export default class BrowseFactory extends ViewFactory {
  createTable() {
    return new TableBrowserComponent()
  }
}