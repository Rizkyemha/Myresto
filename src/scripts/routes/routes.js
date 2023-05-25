import Daftar from '../views/pages/daftar-resto';
import Favorit from '../views/pages/fav-resto';
import Detail from '../views/pages/detail-resto';

const routes = {
  '/': Daftar,
  '/daftar': Daftar,
  '/favorit': Favorit,
  '/detail/:id': Detail,
};

export default routes;
