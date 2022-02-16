import React from "react";

export default function Footer() {
  return (
    <div className="py-6 lg:max-h-full">
      <footer className="text-white body-font bg-blue-400 tracking-wide leading-loose">
        <div className="md:container px-5 py-24 mx-auto space-y-6 divide-y">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="md:w-1/3 sm:w-1/2 w-full px-10">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CÔNG TY CỔ PHẦN TẬP ĐOÀN
              </h2>
              <hr className="font-2xl font-solid" style={{ width: "150px" }} />
              <nav className="list-none mt-3">
                <li className="my-2">
                  <p className="text-white">
                    {" "}
                    <strong> Trụ sở chính:</strong> 42 Hoàng Bát Đạt, P.15,
                    Q.Tân Bình, TP.HCM
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-white">
                    {" "}
                    <strong> Tel : </strong> 028 3815074{" "}
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-white">
                    {" "}
                    <strong> Fax : </strong> 028 66800373{" "}
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-white">
                    {" "}
                    <strong> Email : </strong> tuvan@setgroup.com{" "}
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-white">
                    {" "}
                    <strong> Website : </strong> www.vsetgroup.com{" "}
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-white">
                    {" "}
                    <strong> Thứ 2 - Thứ 6 : </strong> 8h-17h{" "}
                    <strong> Thứ 7 : </strong> 8h-12h{" "}
                  </p>
                </li>
              </nav>
            </div>
            <div className="md:w-1/3 sm:w-1/2 w-full px-8">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LIÊN KẾT VỚI CHÚNG TÔI
              </h2>
              <hr className="font-2xl font-solid" style={{ width: "150px" }} />
              <nav className="list-none mt-3">
                <li className="my-2">
                  <p className="text-white font-bold mb-1">CHI NHÁNH CẦN THƠ</p>
                  <p className="text-white">
                    {" "}
                    E35, Đường 56, Khu Dân Cư 586, Phú Thứ, Cái Răng - Tp. Cần
                    Thơ
                  </p>
                  <p className="text-white"> Tel: 0292 3676 888</p>
                </li>
                <li className="my-2">
                  <p className="text-white font-bold mb-1">
                    CHI NHÁNH BÌNH DƯƠNG
                  </p>
                  <p className="text-white">
                    {" "}
                    Lầu 3 Hà Nam Building, 26 Quốc Lộ 13, Khu phố Tây, Phường
                    Vĩnh Phú, Thị xã Thuận An, Bình Dương
                  </p>
                  <p className="text-white"> Tel: 0274 3763 777</p>
                </li>
                <li className="my-2">
                  <p className="text-white font-bold mb-1">
                    CHI NHÁNH ĐỒNG NAI
                  </p>
                  <p className="text-white">
                    {" "}
                    20B QL1A, KP2, P. Phú Bình, TP. Long Khánh, Tỉnh Đồng Nai
                  </p>
                  <p className="text-white">Tel: 0251 3783 777</p>
                </li>
              </nav>
            </div>
            <div className="md:w-1/3 sm:w-1/2 w-full px-20">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                VỀ CHÚNG TÔI
              </h2>
              <hr className="font-2xl font-solid" style={{ width: "150px" }} />
              <nav className="list-none mt-3">
                <li className="my-2">
                  <p className="text-white ">BAN LÃNH ĐẠO</p>
                </li>
                <li className="my-2">
                  <p className="text-white ">VỀ CHÚNG TÔI</p>
                </li>
                <li className="my-2">
                  <p className="text-white">CÁC CÔNG TY THÀNH VIÊN</p>
                </li>
                <li className="my-2">
                  <p className="text-white">CHIẾN LƯỢC PHÁT TRIỂN 5 NĂM CỦA</p>
                </li>
                <li className="my-2">
                  <p className="text-white">
                    TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI
                  </p>
                </li>
                <li>
                  <p className="text-white">VĂN HÓA TẬP ĐOÀN</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
