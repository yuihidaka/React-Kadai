import React from 'react'
import GWSAImage from "../Images/GWSA.png";
import AZ900Image from "../Images/AZ-900.png";
import profileImage from "../Images/icon.png";

const Homepage = () => {
  return (
    <div className="container text-center">
    <h1>H.Y</h1>

    <img src={profileImage} className="profileImage" />

    <p>
      2015年上京。2年間レコーディングエンジニアの専門学校に通い、その後ラジオ音声MIXの仕事に就く。
    </p>
    <p>
      2023年11月より、株式会社コクーに入社しITエンジニアへと転職。現場では主に、Google Workspaceを取り扱い、設計、構築、テストを行っている。
    </p>

    <section id="skill">
      <div class="text-center">
        <h2 class="title">スキル</h2>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={GWSAImage} />
            <h4 class="license">Google Workspace Administrator</h4>
            <p class="get">2024年10月4日取得</p>
          </div>
          <div class="col-md-4 services">
            <img src={AZ900Image} />
            <h4 class="license">AZ-900</h4>
            <p class="get">2024年6月3日取得</p>
          </div>
        </div>
        {/* <button type="button" class="btn btn-primary">
          スキル一覧
        </button> */}
        {/* <a href="https://www.credly.com/users/username.1365e2dc">
        <button>スキル一覧</button>
        </a> */}
        <form action="https://www.credly.com/users/username.1365e2dc" method="get">
            <button type="submit" class="btn btn-primary">スキル一覧</button>
        </form>

      </div>
    </section>
  </div>
  )
}

export default Homepage