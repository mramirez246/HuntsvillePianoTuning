import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
//
import { Link } from "react-router-dom";
import Footer from "./UTILITIES/Footer";
import Navigation from "./UTILITIES/Navigation";
import { HiXMark } from "react-icons/hi2";
//
import logo from "../PHOTOS/stock.png";
import "../STYLESHEETS/Shop.css";
import "../STYLESHEETS/CartReview.css";
//
//
import { HiShoppingCart } from "react-icons/hi";
import { IoChevronForwardCircleSharp } from 'react-icons/io5'
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";
import { setSuccessState } from "../REDUX/SLICES/SuccessSlice";
import { setLoadingState } from "../REDUX/SLICES/LoadingSlice";
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import {
  firebaseGetPageViews,
  getProducts,
  purchaseItems,
} from "../FIREBASE/firebase";
import Modal from "./UTILITIES/Modal";
import { c_businessName, c_mainURL, emailjs_fromEmail, square_appID, square_locationID } from "../Constants";
import { useStripe } from "./UTILITIES/use-stripe";
import { randomString } from "../Global";
import { Helmet } from "react-helmet";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

//

export default function Shop() {
  const dispatch = useDispatch();
  const [loadingStripe, errorStripe, asyncStripeRedirect] = useStripe();
  function openNav() {
    if (window.innerWidth < 600) {
      document.querySelector(".nav-body").style.width = "100vw";
    } else if (window.innerWidth < 800) {
      document.querySelector(".nav-body").style.width = "50vw";
    } else if (window.innerWidth < 1000) {
      document.querySelector(".nav-body").style.width = "40vw";
    } else if (window.innerWidth < 1200) {
      document.querySelector(".nav-body").style.width = "35vw";
    } else {
      document.querySelector(".nav-body").style.width = "20vw";
    }
  }
  function closeNav() {
    document.querySelector(".nav-body").style.width = "0";
  }

  // const products = [
  //     {
  //         id: 0,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img1],
  //         Category: "Tech"
  //     },
  //     {
  //         id: 1,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 150,
  //         Quantity: 14,
  //         Img: [img2],
  //         Category: "Tech"
  //     },
  //     {
  //         id: 2,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img3],
  //         Category: "Tech"
  //     },
  //     {
  //         id: 3,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img4],
  //         Category: "Food"
  //     },
  //     {
  //         id: 4,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img5],
  //         Category: "Food"
  //     },
  //     {
  //         id: 5,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img6],
  //         Category: "Food"
  //     },
  //     {
  //         id: 6,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img7],
  //         Category: "Beauty"
  //     },
  //     {
  //         id: 7,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img8],
  //         Category: "Beauty"
  //     },
  //     {
  //         id: 8,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img4],
  //         Category: "Beauty"
  //     },
  //     {
  //         id: 9,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 170,
  //         Quantity: 14,
  //         Img: [img5],
  //         Category: "Sports"
  //     },
  //     {
  //         id: 10,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 140,
  //         Quantity: 14,
  //         Img: [img1],
  //         Category: "Sports"
  //     },
  //     {
  //         id: 11,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 120,
  //         Quantity: 14,
  //         Img: [img2],
  //         Category: "Sports"
  //     },
  //     {
  //         id: 12,
  //         Name: "Everything Bagel",
  //         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
  //         Price: 190,
  //         Quantity: 14,
  //         Img: [img3],
  //         Category: "Sports"
  //     },
  // ]

  const products = useSelector((state) => state.products.value);

  const [categories, setCategories] = useState([]);
  const [tempProds, setTempProds] = useState([]);
  const [prodID, setProdID] = useState(-1);
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState();
  const [payBtn, setPayBtn] = useState(false);

  const chooseCategory = () => {
    const categs = document.querySelectorAll(".cbCategory");
    var checked = [];
    var count = 0;
    for (var i in categs) {
      if (categs[i].checked) {
        const cate = categs[i].id;
        count += 1;
        for (var j in products) {
          if (products[j].Category == cate) {
            checked.push(products[j]);
          }
        }
      }
    }
    if (count > 0) {
      setTempProds(checked);
    } else {
      setTempProds(products);
    }
  };
  const addToCart = (item) => {
    var exists = false;
    for (var i in cartItems) {
      const ci = cartItems[i];
      if (ci.id == item.id) {
        exists = true;
      }
    }
    if (!exists) {
      var thing = [...cartItems];
      thing.push({
        id: item.id,
        Name: item.Name,
        Quantity: 1,
        Price: item.Price,
        Img: item.Images[0],
        Desc: item.Desc
      });

      dispatch(setSuccessState(true));
      setCartItems(thing);
      setTimeout(() => {
        dispatch(setSuccessState(false));
      }, 1000);

      const tempSub = parseFloat(subTotal) + item.Price;
      const tempTax = tempSub * tx;
      const tempTot = tempSub + tempTax;

      setSubTotal(tempSub);
      setTaxes(tempTax.toFixed(2));
      setTotal(tempTot.toFixed(2));
    }
  };
  const increaseQty = (item) => {
    var tempItem = {};
    var maxQty = 0;
    const tempArr = [...cartItems];
    for (var i in tempProds) {
      if (tempProds[i].id == item.id) {
        maxQty = tempProds[i].Quantity;
      }
    }

    if (item.Quantity + 1 <= 25) {
      tempItem = {
        ...item,
        Quantity: item.Quantity <= maxQty - 1 ? item.Quantity + 1 : maxQty,
      };
      for (var i in tempArr) {
        if (tempArr[i].id == item.id) {
          tempArr[i] = tempItem;
        }
      }
      setCartItems(tempArr);
      // Totals
      const tempSub = parseFloat(subTotal) + tempItem.Price;
      const tempTax = tempSub * tx;
      const tempTot = tempSub + tempTax;

      setSubTotal(tempSub);
      setTaxes(tempTax.toFixed(2));
      setTotal(tempTot.toFixed(2));
    }
  };
  const decreaseQty = (item) => {
    if (item.Quantity - 1 >= 1) {
      const tempSub = parseFloat(subTotal) - item.Price;
      const tempTax = tempSub * tx;
      const tempTot = tempSub + tempTax;

      setSubTotal(tempSub);
      setTaxes(tempTax.toFixed(2));
      setTotal(tempTot.toFixed(2));
    }
    var tempItem = {};
    const tempArr = [...cartItems];
    tempItem = {
      ...item,
      Quantity: item.Quantity > 1 ? item.Quantity - 1 : 1,
    };

    for (var i in tempArr) {
      if (tempArr[i].id == item.id) {
        tempArr[i] = tempItem;
      }
    }
    setCartItems(tempArr);
    // Totals
  };
  const removeItem = (item) => {
    const amount = item.Quantity * item.Price;

    const newSub = parseFloat(subTotal) - amount;
    const newTax = newSub * tx;
    const newTotal = newSub + newTax;

    setSubTotal(newSub);
    setTaxes(newTax.toFixed(2));
    setTotal(newTotal);

    const thing = cartItems.filter(function (it) {
      return it.id !== item.id;
    });
    setCartItems(thing);
  };
  const review = () => {
    setShowReview(true);
  };
  const payNow = async () => {
    // CHECKOUT HERE
    const email = document.querySelector('#tbEmail').value
    const fullName = document.querySelector("#tbFullName").value
    const orderID = randomString(8)
    var message = ""
    for (var i in cartItems) {
      const item = cartItems[i]
      const itemHTML = `<b>${item.Name} - x${item.Quantity}</b><br/><p>${item.Desc}</p><br/><br/>`
      message += itemHTML
    }

    const params = {
      to_name: fullName,
      to_email: email,
      from_name: c_businessName,
      from_email: emailjs_fromEmail,
      message: message,
      reply_to: emailjs_fromEmail,
      order_id: orderID.toUpperCase()
    }
    const myParams = {
      to_name: c_businessName,
      to_email: emailjs_fromEmail,
      from_name: fullName,
      from_email: email,
      message: message,
      reply_to: email,
      date: new Date().toLocaleString(),
      order_id: orderID.toUpperCase(),
      full_name: fullName
    }

    try {
      purchaseItems({
        date: new Date(),
        subTotal,
        tax: taxes,
        total,
        cartItems,
        products,
        setResponse,
      }, orderID, email, fullName, params, myParams);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeThing = () => {
    const email = document.querySelector("#tbEmail").value
    const name = document.querySelector("#tbFullName").value
    if (name != "" && email.includes("@") && email.includes(".com")) {
      setPayBtn(true)
    } else {
      setPayBtn(false)
    }
  }


  useEffect(() => {
    if (response?.sessionId && response.orderID) {
      asyncStripeRedirect({ sessionId: response.sessionId });

      window.dataLayer.push({
        event: "Stripe Checkout Page Visit",
        orderID: response.orderID,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const calcTotal = () => {
    var tempSub = 0;
    var tempTax = 0;
    var tempTot = 0;
    for (var i in cartItems) {
      tempSub += cartItems[i].Price * cartItems[i].Quantity;
    }
    tempTax = tempSub * tx;
    tempTot = tempSub + tempTax;

    setSubTotal(tempSub.toFixed(2));
    setTaxes(tempTax.toFixed(2));
    setTotal(tempTot.toFixed(2));

    console.log(tempSub);
    console.log(tempTax);
    console.log(tempTot);
  };

  const tx = 0.08;

  useEffect(() => {
    closeNav();
    window.scrollTo(0, 0);
    dispatch(setLoadingState(true));
    getProducts(dispatch, setTempProds, setCategories).then(() => {
      dispatch(setLoadingState(false));
    });
    firebaseGetPageViews({ Name: "Shop", Views: 0 });
  }, []);
  return (
    <div className="main">
      <Helmet>
        <title>Shop | Happy Code Template</title>
        <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
        <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${c_mainURL}`} />
        <meta property="og:title" content="Shop | Happy Code Template" />
        <meta property="og:description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
        <meta property="og:url" content={`${c_mainURL}`} />
        <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/stock.png`} />
      </Helmet>
      {/* Cart Review */}
      {showReview ? (
        <div className="modal-cart-review font1">
          <div className="modal-cart-review-wrap bg2">
            <div className="separate">
              <h1>Review your cart.</h1>
              <div
                onClick={() => {
                  setShowReview(false);
                }}
                className="modal-icon"
              >
                <HiXMark />
              </div>
            </div>
            <div className="cart-rev">
              {cartItems.map((item, i) => {
                return (
                  <div className="rev-item" key={i}>
                    <img src={item.Img} />
                    <div className="separate">
                      <div className="rev-item-pair">
                        <h2>{item.Name}</h2>
                        <h3 className="color3">Qty: {item.Quantity}</h3>
                      </div>
                      <p>${item.Price * item.Quantity}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <div className="cart-rev-totals bg1 color2">
              <div className="cart-rev-totals-pair">
                <p>Sub Total:</p>
                <h4 className="color3">${subTotal}</h4>
              </div>
              <div className="cart-rev-totals-pair">
                <p>Tax:</p>
                <h4 className="color3">${taxes}</h4>
              </div>
              <div className="cart-rev-totals-pair">
                <p>Total:</p>
                <h4>${total}</h4>
              </div>
            </div>
            <br />
            {/* ADD PAYMENT STUFF HERE */}
            <hr />
            <div className="customer-details">
              <label>Full Name</label>
              <input type="text" className="customer-details-tb border2" id="tbFullName" placeholder="John Doe" onChange={onChangeThing} />
              <label>Email:</label>
              <p className="color3">Please enter your email to get an electronic copy of your receipt. Use this receipt for confirming order upon pick up.</p>
              <input type="text" className="customer-details-tb border2" id="tbEmail" placeholder="jdoe@happycode.com" onChange={onChangeThing} />
            </div>
            {
              payBtn ? <button
                id="btn-pay"
                onClick={payNow}
                className="cart-rev-btn bg1 color2 no-border"
              >
                Pay Now
              </button> : <div></div>
            }
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {showModal ? (
        <Modal
          heading="Your purchase has been confirmed."
          text="A digital receipt has been emailed to you and your order has been sent to the merchant."
        />
      ) : (
        <p></p>
      )}

      {/* NAGIVATION */}
      <Navigation />
      <div className="top">
        <Link to="/">
          <img src={logo} />
        </Link>
        <RxHamburgerMenu className="top-icon" onClick={openNav} />
      </div>
      {/* BODY */}
      <div className="shop font1">
        <div className="separate padding">
          <h1 className="page-title-sm">Shop</h1>
          <div
            className="shop-cart-icon"
            onClick={() => {
              setToggleCart(!toggleCart);
              calcTotal();
            }}
          >
            <HiShoppingCart />
          </div>
        </div>
        {toggleCart ? (
          <div id="cart" className="cart">
            <h1>Cart</h1>
            <div className="border3">
              {cartItems.length > 0 ? (
                <div className="cart-wrap">
                  <div className="cart-prods">
                    {cartItems.map((item, i) => {
                      return (
                        <div key={i} className="cart-item no-bg color1">
                          <img src={item.Img} className="cart-item-img" />
                          <div className="cart-item-block">
                            <h4 className="cart-item-name">{item.Name}</h4>
                            <div className="separate">
                              <div className="flex">
                                <h4 className="cart-item-price color3">
                                  ${item.Price}
                                </h4>

                                <button
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                  className="no-bg no-border red cart-item-rem"
                                >
                                  Remove
                                </button>
                              </div>
                              <div className="cart-item-qty-block">
                                {
                                  item.Quantity > 1 ? <button
                                    className="no-bg color1 no-border"
                                    onClick={() => {
                                      decreaseQty(item);
                                    }}
                                  >
                                    <BsFillArrowDownCircleFill />
                                  </button> : <div></div>
                                }
                                <p className="">{item.Quantity}</p>
                                <button
                                  className="no-bg color1 no-border"
                                  onClick={() => {
                                    increaseQty(item);
                                  }}
                                >
                                  <BsFillArrowUpCircleFill />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="cart-review bg1 color2">
                    <div className="cart-rev-pair">
                      <p>Sub Total:</p>
                      <h4 className="color3">${subTotal}</h4>
                    </div>
                    <div className="cart-rev-pair">
                      <p>Taxes:</p>
                      <h4 className="color3">${taxes}</h4>
                    </div>
                    <div className="cart-rev-pair">
                      <p>Total:</p>
                      <h4>${total}</h4>
                    </div>
                    <button
                      onClick={review}
                      className="pay-now-btn bg2 no-border"
                    >
                      Review Cart
                    </button>
                  </div>
                </div>
              ) : (
                <p className="no-cart-items">No cart items added yet.</p>
              )}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="shop-wrap">
          <div className="shop-left">
            <div className="shop-category">
              {categories.map((cate, i) => {
                return (
                  <div key={i} className="shop-category-pair flex">
                    <input
                      type="checkbox"
                      id={cate}
                      className="cbCategory"
                      onChange={() => {
                        chooseCategory(cate);
                      }}
                    />
                    <p>{cate}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="shop-right">
            <div className="shop-items">
              {tempProds.map((prod, i) => {
                return (
                  <div key={i} className="shop-item">
                    <div className="shop-item-img">
                      <button
                        onClick={() => {
                          addToCart(prod);
                        }}
                        className="shop-item-btn no-border bg2"
                      >
                        <HiShoppingCart className="shop-item-btn-icon color1" />
                      </button>
                      <img src={prod.Images[prod.CurrentCount]} />

                      <button onClick={() => { 
                        const temp = { ...prod };
                        if (temp.CurrentCount - 1 > 0) {
                          temp.CurrentCount = temp.CurrentCount - 1
                        } else {
                          temp.CurrentCount = temp.TempCount - 1
                        }
                        const tempArr = [...tempProds]
                        for (var i = 0; i < tempArr.length; i = i + 1) {
                          if (tempArr[i].id == prod.id) {
                            tempArr[i] = temp
                          }
                        }
                        setTempProds(tempArr)
                      }} className="shop-item-img-arrow-left no-border no-bg"><IoChevronBackCircleSharp /></button>
                      <button onClick={() => {
                        const temp = { ...prod };
                        if (temp.CurrentCount + 1 < temp.TempCount) {
                          temp.CurrentCount = temp.CurrentCount + 1
                        } else {
                          temp.CurrentCount = 0
                        }
                        const tempArr = [...tempProds]
                        for (var i = 0; i < tempArr.length; i = i + 1) {
                          if (tempArr[i].id == prod.id) {
                            tempArr[i] = temp
                          }
                        }
                        setTempProds(tempArr)
                      }} className="shop-item-img-arrow-right no-border no-bg"><IoChevronForwardCircleSharp /></button>
                    </div>

                    <div className="separate">
                      <h2 className="shop-item-name">{prod.Name}</h2>
                      <h3 className="shop-item-price">${prod.Price}</h3>
                    </div>
                    {prod.id == prodID ? (
                      <p className="shop-item-desc">{prod.Desc}</p>
                    ) : (
                      <div></div>
                    )}
                    <div>
                      <p
                        className="shop-item-show"
                        onClick={() => {
                          prod.id == prodID
                            ? setProdID(-1)
                            : setProdID(prod.id);
                        }}
                      >
                        {prod.id == prodID ? "Show Less" : "Show More"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
}
