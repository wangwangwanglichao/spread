/**
 * Created by 520 on 2018/2/5.
 */
var createEle = function (num) {
   document.body.style.margin = 0;
   document.body.style.padding = 0;

   var box = document.createElement('div');
   box.id = 'box';
   box.style.position = 'relative';
   box.style.width = num + 'px';
   box.style.height = num + 'px';

   var ulEle = document.createElement('ul');
   ulEle.style.position = 'absolute';
   ulEle.style.top = 0;
   ulEle.style.left = 0;
   ulEle.style.margin = 0;
   ulEle.style.padding = 0;
   ulEle.style.listStyle = 'none';
   ulEle.style.width = num / 2 + 'px';
   ulEle.style.height = num + "px";
   ulEle.style.borderRadius = num + 'px 0 0 ' + num + 'px';
   ulEle.style.overflow = 'hidden';

   for (var i = 0; i < 6; i++) {
      var liEle = document.createElement('li');
      liEle.style.position = 'absolute';
      liEle.style.left = 0;
      liEle.style.top = num / 2 + 'px';
      liEle.style.width = num / 2 + 'px';
      liEle.style.height = num / 2 + 'px';
      liEle.style.transformOrigin = 'top right';
      liEle.style.backgroundColor = 'red';
      liEle.style.transform = 'rotateZ(-90deg)';
      liEle.style.cursor = 'pointer';

      var aEle = document.createElement('a');
      aEle.href = '#';
      aEle.style.position = 'absolute';
      aEle.style.width = num / 2 + 'px';
      aEle.style.height = num / 2 + 'px';

      var spanEle = document.createElement('span');
      spanEle.style.position = 'absolute';
      spanEle.style.width = '1em';
      spanEle.style.height = 'auto';
      spanEle.style.lineHeight = '1em';
      spanEle.style.textAlign = 'center';
      spanEle.style.textDecoration = 'none';
      spanEle.style.top = '10px';
      spanEle.style.color = 'orange';
      spanEle.style.transformOrigin = 'top right';
      spanEle.style.transform = 'rotateZ(-90deg)';
      spanEle.innerHTML = '我是文字' + (i + 1);

      aEle.appendChild(spanEle);
      liEle.appendChild(aEle);
      ulEle.appendChild(liEle);
   }

   var ulElement = ulEle.cloneNode(true);
   ulElement.style.transformOrigin = 'right center';
   ulElement.style.transform = "rotateZ(-180deg)";

   var center = document.createElement('div');
   center.id = 'center';
   center.style.position = 'absolute';
   center.style.width = num / 4 + 'px';
   center.style.height = num / 4 + 'px';
   center.style.lineHeight = num / 4 + 'px';
   center.style.borderRadius = '50%';
   center.style.left = num / 8 * 3 + 'px';
   center.style.top = num / 8 * 3 + 'px';
   center.style.zIndex = 999;
   center.style.textAlign = 'center';
   center.style.backgroundColor = '#666';
   center.style.cursor = 'pointer';
   center.innerHTML = '导航';

   box.appendChild(ulEle);
   box.appendChild(ulElement);
   box.appendChild(center);
   document.body.appendChild(box);
};




