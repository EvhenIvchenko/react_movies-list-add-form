(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),c=(i(16),i(11)),s=i(2),l=(i(17),i(1)),r=(i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(5),b=i(7),j=i(9),h=i.n(j),u=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,g=function(e){return!!u.test(e)};var O=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0===d||d,b=e.onChange,j=void 0===b?function(){}:b,u=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(u,1)[0],p=Object(l.useState)(!1),v=Object(s.a)(p,2),w=v[0],x=v[1],f=w&&m&&""===i.trim();"imgUrl"!==t&&"imdbUrl"!==t||(f=w&&m&&!g(i));return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:O,children:n}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:h()("input",{"is-danger":f}),placeholder:o,value:i,onChange:function(e){return j(e.target.value,t)},onBlur:function(){x(!0)}})}),f&&("imgUrl"!==t&&"imdbUrl"!==t||g(i)||""===i.trim()?Object(r.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}):Object(r.jsx)("p",{className:"help is-danger",children:"".concat(n," is not a valid URL")}))]})},p=function(e){var t=e.onAdd,i={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},a=Object(l.useState)(0),n=Object(s.a)(a,2),c=n[0],o=n[1],d=Object(l.useState)(i),j=Object(s.a)(d,2),h=j[0],u=j[1],p=""!==h.title.trim()&&""!==h.imgUrl.trim()&&""!==h.imdbUrl.trim()&&""!==h.imdbId.trim(),v=!g(h.imgUrl)||!g(h.imdbUrl),w=function(e,t){u(Object(b.a)(Object(b.a)({},h),{},Object(m.a)({},t,e)))};return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),p&&(t(h),u(i),o((function(e){return e+1})))},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(O,{name:"title",label:"Title",value:h.title,onChange:w}),Object(r.jsx)(O,{name:"description",label:"Description",value:h.description,onChange:w,required:!1}),Object(r.jsx)(O,{name:"imgUrl",label:"Image URL",value:h.imgUrl,onChange:w}),Object(r.jsx)(O,{name:"imdbUrl",label:"Imdb URL",value:h.imdbUrl,onChange:w}),Object(r.jsx)(O,{name:"imdbId",label:"Imdb ID",value:h.imdbId,onChange:w}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!p||v,"aria-disabled":!p||v,children:"Add"})})})]},c)},v=i(10),w=function(){var e=Object(l.useState)(v),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(p,{onAdd:function(e){a([].concat(Object(c.a)(i),[e]))}})})]})};n.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.143ed195.chunk.js.map