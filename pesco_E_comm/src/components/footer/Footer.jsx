import React from 'react'

export default function Footer() {
  return (
    <div>
      <>
        {/* footer section */}
        <footer className=" container-fluid mt-5   ">
          <div className="container mt-5 d-flex justify-content-center flex-wrap row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div className="col p-3">
              <img
                src="https://html.pixelfit.agency/pesco/assets/images/logo/logo-main.png"
                alt=""
              />
              <p className="mt-3">
                Pesco is an exciting International brand we provide high quality
                cloths
              </p>
              <p>
                <i className="ri-mail-line fs-4" />
                info@mydomain.com
              </p>
              <p>
                <i className="ri-phone-line" />
                info@mydomain.com
              </p>
              <hr />
              <p>
                <span className="fs-4">Find Us :</span>
                <i className="ri-facebook-fill fs-4" />
                <i className="ri-instagram-fill fs-4" />
                <i className="ri-linkedin-fill fs-4" />
                <i className="ri-twitter-fill fs-4" />
              </p>
            </div>
            <div className="col p-3">
              <h3 className="fs-3">Customer Services</h3>
              <div>
                <p className="m-3 fs-5">⭐Collections &amp; Delivery</p>
                <p className="m-3 fs-5">⭐Returns &amp; Refunds</p>
                <p className="m-3 fs-5">⭐Terms &amp; Conditions</p>
                <p className="m-3 fs-5">⭐Delivery Return</p>
                <p className="m-3 fs-5">⭐Store Locations</p>
              </div>
            </div>
            <div className="col p-3">
              <h3 className="fs-3">Quick Link</h3>
              <div>
                <p className="m-3 fs-5">⭐Privacy Policy</p>
                <p className="m-3 fs-5">⭐Terms Of Use</p>
                <p className="m-3 fs-5">⭐FAQ</p>
                <p className="m-3 fs-5">⭐Contact</p>
                <p className="m-3 fs-5">⭐Login / Register</p>
              </div>
            </div>
            <div className="col p-3">
              <h3 className="fs-3">Recent Post</h3>
              <div className="d-flex">
                <div>
                  <img
                    src="https://html.pixelfit.agency/pesco/assets/images/footer/recent-post-1.png"
                    alt=""
                  />
                </div>
                <div className="m-0 p-2 ">
                  <p cklkass="m-0">Tips on Finding Affordable Fashion Gems Online</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <img
                    src="https://html.pixelfit.agency/pesco/assets/images/footer/recent-post-2.png"
                    alt=""
                  />
                </div>
                <div className="m-0 p-2 ">
                  <p cklkass="m-0">Tips on Finding Affordable Fashion Gems Online</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <img
                    src="https://html.pixelfit.agency/pesco/assets/images/footer/recent-post-3.png"
                    alt=""
                  />
                </div>
                <div className="m-0 p-2 ">
                  <p cklkass="m-0">Tips on Finding Affordable Fashion Gems Online</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container p-5 d-flex justify-content-between flex-wrap row-cols-lg-1 row-cols-xl-2">
              <div className="fs-4 col">© 2024. All rights reserved by Pixelfit</div>
              <div className=" d-none d-sm-block">
                <img
                  src="https://html.pixelfit.agency/pesco/assets/images/footer/payment-method.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </footer>
      </>

    </div>
  )
}
