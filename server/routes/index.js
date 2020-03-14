import GetSites from './sites/GetSites';
import AddSite from './sites/AddSite';
import DeleteSite from './sites/DeleteSite';

import GetProducts from './products/GetProducts';

export default [new GetSites(), new AddSite(), new DeleteSite(), new GetProducts()];
