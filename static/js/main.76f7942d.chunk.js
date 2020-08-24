(this["webpackJsonpexample-shop"]=this["webpackJsonpexample-shop"]||[]).push([[0],{100:function(e,t,a){e.exports=a(124)},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(20),i=a(45),u=a(49),m=a.n(u),s=a(185),d=a(183),E=a(61),p=a(29),h=a(186),f=a(93),b=a(68),v=a(92),g=a(27),y=a.n(g),C="shop/reducer/shop/SET_SHOP_ITEMS",O="shop/reducer/shop/ADD_TO_CART",k=function(e,t){return{productId:e,quantity:t,type:O}},S=m()({shopItems:[],cart:{}});function N(e){return e.shop.shopItems}function _(e,t){return e.shop.cart[t]||0}function j(e){return e.shop.cart}var T={shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return m()(Object(p.a)({},e,{shopItems:t.items}));case O:return m()(Object(p.a)({},e,{cart:Object(p.a)({},e.cart,Object(E.a)({},t.productId,t.quantity))}));default:return e}}},w=Object(i.c)(T),I=Object(s.a)((function(e){return e.pipe(Object(v.a)("shop/reducer/shop/SET_FETCH_ITEMS"),Object(f.a)((function(){return h.a.getJSON("https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products").pipe(Object(b.a)((function(e){return{items:e,type:C}})))})))})),A=Object(d.a)(),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,P=Object(i.e)(w,m()({}),H(Object(i.a)(A)));A.run(I);var x=P,F=(a(110),a(111),a(26)),$=a(14),B=a(58),D=a(76),L=a(182),M=a(174),R=a(165),q=a(166),z=a(167),J=a(168),W=a(169),X=(a(112),a(113),a(158)),Q=a(162),U=a(164),V=function(e){var t=e.stock,a=e.cartCount,n=e.setHandler,c=e.withoutLabel,l=r.a.useState(a),o=Object(B.a)(l,2),i=o[0],u=o[1];r.a.useEffect((function(){u(a)}),[a]);var m=function(){n(a+1)};return r.a.createElement("div",{className:"Order-container"},a>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{style:{color:"red"},size:"small",onClick:function(){n(a-1)}},r.a.createElement(Q.a,null,"remove")),r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p",className:"Order-label"},!c&&r.a.createElement(Q.a,{className:"cart-icon"},"add_shopping_cart")," ",!c&&r.a.createElement("div",null,"Added"),r.a.createElement(L.a,{className:"Order-count",type:"number",value:i,onChange:function(e){u(parseInt(e.target.value))},onBlur:function(e){var a=parseInt(e.target.value);n(a>t?t:a<0?0:a)}})),r.a.createElement(X.a,{size:"small",onClick:m,style:{color:a===t?"inherit":"blue"},disabled:a===t},r.a.createElement(Q.a,null,"add"))):r.a.createElement(U.a,{onClick:m,disabled:a===t,size:"small",color:"primary"},r.a.createElement(Q.a,null,"add_shopping_cart")," Add to cart"))},G={addToCartActionCreator:k},K=Object(o.b)((function(e,t){return{cartCount:_(e,t._id)}}),G)((function(e){var t=e._id,a=e.title,n=e.price,c=e.picture,l=e.addToCartActionCreator,o=e.cartCount,i=e.stock;return r.a.createElement(R.a,{className:"ShelveItem-card"},r.a.createElement(F.b,{to:"/product/".concat(t)},r.a.createElement(q.a,null,r.a.createElement(z.a,{className:"ShelveItem-media",image:c,title:"Contemplative Reptile"}),r.a.createElement(J.a,{className:"ShelveItem-content"},r.a.createElement(D.a,{gutterBottom:!0,color:"textSecondary",variant:"body2",component:"p"},a),r.a.createElement(D.a,{variant:"h6",component:"p"},"$ ",n),o===i&&r.a.createElement(D.a,{style:{color:"red"},variant:"body2",color:"textSecondary",component:"p"},"Out of Stock")))),r.a.createElement(W.a,null,r.a.createElement(V,{stock:i,cartCount:o,setHandler:function(e){l(t,e)}})))})),Y=(a(115),a(116),a(117),a(163)),Z=a(173),ee=a(126),te=a(171),ae=a(170),ne=a(187),re=a(172),ce=function(e){var t=e._id,a=e.title,n=e.price,c=e.count,l=e.addToCartHandler,o=e.picture;return r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,{variant:"square",alt:"",src:o})),r.a.createElement(te.a,{primary:a,secondary:"".concat(c," x $ ").concat(n)}),r.a.createElement(re.a,null,r.a.createElement(X.a,{edge:"start","aria-label":"delete",onClick:function(){l(t,0)}},r.a.createElement(Q.a,null,"clear"))))},le={addToCartActionCreator:k},oe=Object(o.b)((function(e){return{items:N(e),cartObject:j(e)}}),le)((function(e){var t=e.cartObject,a=e.items,n=e.addToCartActionCreator,c=y.a.keys(t),l=0,o=c.map((function(e){return Object(p.a)({},y.a.find(a,{_id:e})||{},{count:t[e],addToCartHandler:n})})).filter((function(e){return 0!==e.count}));return o.forEach((function(e){return l+=e.count*e.price})),r.a.createElement("div",{className:"Cart-container"},r.a.createElement(D.a,{variant:"body2"}," Cart "),o.length>0&&r.a.createElement(Y.a,{className:"list-container"},o.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(ce,e))})),r.a.createElement(Z.a,null),r.a.createElement(ee.a,null,r.a.createElement(te.a,{primary:"Subtotal $ "+l,secondary:""})),r.a.createElement(ee.a,null,r.a.createElement(F.b,{to:"/checkout"},r.a.createElement(U.a,{variant:"contained",color:"primary"},"Proceed to Checkout")))),o.length<=0&&r.a.createElement(Y.a,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,{primary:"No items to display",secondary:""}))))}));var ie=function(e){return function(t){return r.a.createElement("div",{className:"withCart-container"},r.a.createElement("div",{className:"withCart-main-content"},r.a.createElement(e,t)),r.a.createElement("div",{className:"withCart-content"},r.a.createElement(oe,null)))}},ue=(a(118),a(119),function(){return r.a.createElement("div",{className:"Header-container"},r.a.createElement(D.a,{className:"Header-logo",variant:"h5"},"Shop"))});var me=function(e){return function(t){return r.a.createElement("div",{className:"withHeader-container"},r.a.createElement(ue,null),r.a.createElement(e,t))}},se=[{label:"Sort by price high to low",value:"desc"},{label:"Sort by price low to high",value:"asc"}],de=ie(me(Object(o.b)((function(e){return{items:N(e)}}),{})((function(e){var t=e.items,a=r.a.useState([]),n=Object(B.a)(a,2),c=n[0],l=n[1],o=r.a.useState(!1),i=Object(B.a)(o,2),u=i[0],m=i[1];r.a.useEffect((function(){l(u?y.a.orderBy(t,["price"],["asc"]):y.a.orderBy(t,["price"],["desc"]))}),[t,u]);return r.a.createElement("div",{className:"Shelve-container"},r.a.createElement("div",{className:"Shelve-header"},r.a.createElement(D.a,{variant:"body2"},"Showing ",c.length," out of ",c.length," items"),r.a.createElement(L.a,{select:!0,label:"",value:u?"asc":"desc",onChange:function(e){return m("asc"===e.target.value)}},se.map((function(e){return r.a.createElement(M.a,{key:e.value,value:e.value},e.label)})))),r.a.createElement("div",{className:"Shelve-body"},c.map((function(e){return r.a.createElement(K,Object.assign({key:e._id},e))}))))})))),Ee=(a(120),a(184)),pe=a(175);a(121);var he={addToCartActionCreator:k},fe=ie(me(function(e){return function(t){var a=Object($.g)().id;return r.a.createElement(e,Object(p.a)({},t,{id:a}))}}(Object(o.b)((function(e,t){var a;return{count:(a=t.id,_(e,a)),item:function(t){return function(e,t){return y.a.find(e.shop.shopItems,{_id:t})}(e,t)}(t.id)}}),he)((function(e){var t=e.count,a=e.item,n=e.addToCartActionCreator;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.b,{className:"back-btn",to:"/"},r.a.createElement(Q.a,null," keyboard_backspace_icon")," Return to List"),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:"Product-card"},r.a.createElement(z.a,{className:"Product-media",image:a.picture}),r.a.createElement(J.a,{className:"Product-content"},r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"p"},a.title),r.a.createElement(D.a,{variant:"h6",color:"textSecondary",component:"p"},"$ ",a.price),t===a.stock&&r.a.createElement(D.a,{style:{color:"red"},variant:"body2",color:"textSecondary",component:"p"},"Out of Stock"),r.a.createElement(V,{stock:a.stock,cartCount:t,setHandler:function(e){return n(a._id,e)}}))),r.a.createElement("div",{className:"Product-tab-section"},r.a.createElement(Ee.a,{className:"Product-tabs"},r.a.createElement(pe.a,{className:"Product-tab",label:"Description"})),r.a.createElement(D.a,{className:"Product-tab-content",variant:"body2",color:"textSecondary",component:"p"},a.description))))}))))),be=(a(122),a(178)),ve=a(125),ge=a(179),ye=a(180),Ce=a(176),Oe=a(177),ke=a(181),Se=(a(123),function(e){var t=e._id,a=e.title,n=e.price,c=e.count,l=e.addToCartHandler,o=e.picture,i=e.stock;return r.a.createElement(Ce.a,null,r.a.createElement(Oe.a,{align:"right"},r.a.createElement(X.a,{onClick:function(){l(t,0)},size:"small"},r.a.createElement(Q.a,null,"clear "))),r.a.createElement(Oe.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"CheckoutItem-description"},r.a.createElement(ne.a,{variant:"square",alt:"",src:o}),a)),r.a.createElement(Oe.a,{align:"right"},n),r.a.createElement(Oe.a,{align:"right"},r.a.createElement(V,{stock:i,cartCount:c,setHandler:function(e){l(t,e)},withoutLabel:!0}),c===i&&r.a.createElement(D.a,{style:{color:"red"},variant:"body2",color:"textSecondary",component:"p"},"Out of Stock")),r.a.createElement(Oe.a,{align:"right"},"$ ",n*c))}),Ne={addToCartActionCreator:k},_e=me(Object(o.b)((function(e){return{items:N(e),cartObject:j(e)}}),Ne)((function(e){var t=e.cartObject,a=e.items,n=e.addToCartActionCreator,c=y.a.keys(t),l=0,o=c.map((function(e){return Object(p.a)({},y.a.find(a,{_id:e})||{},{count:t[e],addToCartHandler:n})})).filter((function(e){return 0!==e.count}));return o.forEach((function(e){return l+=e.count*e.price})),r.a.createElement("div",{className:"Checkout-container"},r.a.createElement(F.b,{className:"back-btn",to:"/"},r.a.createElement(Q.a,null," keyboard_backspace_icon")," Return to List"),o.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Checkout-items-container"},r.a.createElement("div",{className:"Checkout-items-section"},r.a.createElement(be.a,{className:"Checkout-table",component:ve.a},r.a.createElement(ge.a,null,r.a.createElement(ye.a,null,r.a.createElement(Ce.a,null,r.a.createElement(Oe.a,null),r.a.createElement(Oe.a,{align:"center"},"Product"),r.a.createElement(Oe.a,{align:"right"},"Price"),r.a.createElement(Oe.a,{align:"center"},"Quantity"),r.a.createElement(Oe.a,{align:"right"},"Subtotal"))),r.a.createElement(ke.a,null,o.map((function(e){return r.a.createElement(Se,Object.assign({key:e._id},e))}))))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Checkout-payout-section"},r.a.createElement(be.a,{className:"Checkout-payout-table",component:ve.a},r.a.createElement(ge.a,null,r.a.createElement(ke.a,null,r.a.createElement(Ce.a,null,r.a.createElement(Oe.a,{component:"th",align:"center"},"Subtotal"),r.a.createElement(Oe.a,{align:"right"},"$",l)),r.a.createElement(Ce.a,null,r.a.createElement(Oe.a,{component:"th",align:"center"},"Shipping"),r.a.createElement(Oe.a,{align:"right"},"Free Shipping. ",r.a.createElement("br",null)," Shipping options will be updated during checkout")),r.a.createElement(Ce.a,null,r.a.createElement(Oe.a,{component:"th",align:"center"},"Total"),r.a.createElement(Oe.a,{align:"right"},"$",l)))))))))),o.length<=0&&r.a.createElement($.a,{to:"/"}))}))),je={fetchShopItemsActionCreator:function(){return{type:"shop/reducer/shop/SET_FETCH_ITEMS"}}},Te=Object(o.b)(null,je)((function(e){var t=e.fetchShopItemsActionCreator;return r.a.useEffect((function(){t()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{basename:"/"},r.a.createElement($.d,null,r.a.createElement($.b,{path:"/product/:id"},r.a.createElement(fe,null)),r.a.createElement($.b,{path:"/checkout"},r.a.createElement(_e,null)),r.a.createElement($.b,{path:"/"},r.a.createElement(de,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:x},r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.76f7942d.chunk.js.map