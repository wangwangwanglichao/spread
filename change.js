function Sport(lis, center) {
   this.timer = null;
   this.number = 0;
   this.num = 0;
   this.lis = lis;
   this.center = center;
}

Sport.prototype.init = function () {
   this.changeColor();
   this.mouseEvent();
};

/* 渐变 */
Sport.prototype.changeColor = function () {
   for (var i = 0; i < this.lis.length; i++) {
      this.number = (this.lis.length - i + 1) * 10;
      this.lis[i].style.backgroundColor = "rgb(" + this.number + "," + this.number + "," + this.number + ")";
      this.lis[i].style.zIndex = this.lis.length - i + 1;
   }
};

/* 展开 */
Sport.prototype.spread = function () {
   for (var i = 0; i < this.lis.length; i++) {
      if (i <= 5) {
         this.num = -90 + ( i + 1) * 30;
      } else if (i > 5) {
         this.num = -90 + ( i - 5) * 30;
      }
      this.lis[i].style.transform = "rotateZ(" + this.num + "deg)";
      this.lis[i].style.transitionDelay = (i + 1) / 40 + "s";
      this.lis[i].className = "";
   }
};

/* 收起 */
Sport.prototype.shrink = function () {
   for (var i = 0; i < this.lis.length; i++) {
      this.lis[this.lis.length - 1 - i].style.transform = "rotateZ(-90deg)";
      this.lis[this.lis.length - 1 - i].style.transitionDelay = (i + 1) / 40 + "s";
   }
};

/* 事件 */
Sport.prototype.mouseEvent = function () {
   var _this = this;
   for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].onmouseenter = function () {
         clearTimeout(_this.timer);
         _this.spread();
         this.className = "current";
      };
      this.lis[i].onmouseleave = center.onmouseleave = function () {
         _this.timer = setTimeout(function () {
            _this.shrink();
         }, 300);
      };
      this.center.onmouseenter = function () {
         clearTimeout(_this.timer);
         _this.spread();
      };
   }
};

