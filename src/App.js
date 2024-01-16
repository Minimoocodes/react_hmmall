import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProducts from "./page/AllProducts";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품 페이지, 로그인 페이지, 상품상세페이지 done
// 1-1. navigation bar done
// 2. 전체상품페이지에서는 전체 상품을 볼 수 있다. done
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다. done
// 4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 먼저 나온다. done
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아운 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고, 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고, vice versa
// 9. 검색이 가능하다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(`aaa ${authenticate}`);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/products/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

// navbar는 모든 페이지에 있어야 하니 라우트를 벗어나서 넣음.
// useState false 이면 로그인 x, true 면 로그인 된 것.

export default App;
