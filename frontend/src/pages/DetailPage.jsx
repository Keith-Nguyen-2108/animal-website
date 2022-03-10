import React, { useRef, useState } from 'react'
import Map from '../components/Map/Map'
import HintSlider from '../components/Slider/HintSlider'
import './DetailPage.css'
import { img } from './listImg'

const DetailPage = () => {

  const [id, setID] = useState(0)
  const listImg = useRef(null)
  const handleHover = (index) => {
    setID(index)
    const list = listImg.current?.children
    for (let i = 0; i < list.length; i++) {
      list[i].className = list[i].className.replace('active', '')
    }
    list[index].className = list[index].className.concat(' active')
  }

  return (
    <React.Fragment>
      <div className="detail__container">
        <div className="detail__content">
          <div className="detail__animal__name">
            Lion
          </div>
          <div className="detail__animal__quickview row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="detail__animal__image row">
                <div className="col-sm-10 col-md-10 col-lg-10">
                  <img src={img[id]}
                    alt="animal"
                    className='detail__animal__big__image'
                  />
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="detail__animal__related__image" ref={listImg}>
                    {
                      img.map((item, index) => (
                        <img key={index}
                          className={`detail__animal__small__image ${index === 0 ? 'active' : ''}`}
                          onMouseOver={(e) => handleHover(index)}
                          src={item} alt='' />

                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="detail__animal__full__infor">
                <p>
                  Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012).
                </p>
                <p>Đặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.</p>
                <p>Ghi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).</p>
                <p>
                  Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.
                </p>
              </div>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="animal__background__infor">
                <h3>information</h3>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    name:
                  </div>
                  <div className="background__infor__item__desc">
                    Rắn trun đĩa
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    date:
                  </div>
                  <div className="background__infor__item__desc">
                    4/13/2018
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    specimen status:
                  </div>
                  <div className="background__infor__item__desc">
                    Thu được mẫu
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    habitat:
                  </div>
                  <div className="background__infor__item__desc">
                    Rừng tràm đặc dụng,  rừng tràm trồng
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    place:
                  </div>
                  <div className="background__infor__item__desc">
                    Rừng Tràm Mỹ Phước, Mỹ Phước, Mỹ Tú, Sóc Trăng.
                  </div>
                </div>
              </div>
              <div className="animal__background__infor">
                <h3>bio</h3>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    kingdom:
                  </div>
                  <div className="background__infor__item__desc">
                    Động vật (Animalia)
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    phylum:
                  </div>
                  <div className="background__infor__item__desc">
                    Động vật có dây sống (chordata)
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    class:
                  </div>
                  <div className="background__infor__item__desc">
                    AMPHIBIA (Linnaeus, 1758)
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    order:
                  </div>
                  <div className="background__infor__item__desc">
                    GYMNOPHIONA (Muller, 1832)
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    family:
                  </div>
                  <div className="background__infor__item__desc">
                    Ichthyophiidae Taylor, 1968
                  </div>
                </div>
              </div>
              <div className="animal__background__infor">
                <h3>Value, conserve</h3>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    value:
                  </div>
                  <div className="background__infor__item__desc">
                    Chưa xác định
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    IUCN:
                  </div>
                  <div className="background__infor__item__desc">
                    LC (Least concern)
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    Red list:
                  </div>
                  <div className="background__infor__item__desc">
                    Sắp nguy cấp
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    NDCP:
                  </div>
                  <div className="background__infor__item__desc">
                    Không nằm trong danh mục bảo tồn
                  </div>
                </div>
                <div className="background__infor__row">
                  <div className="background__infor__item__title">
                    CITES:
                  </div>
                  <div className="background__infor__item__desc">
                    Không có trong danh mục
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Map />
        </div>
      </div>
      <HintSlider />
    </React.Fragment>
  )
}

export default DetailPage