
//滑到熱銷>動畫開始
function getTop(clsName){ 
            var obj = document.getElementsByClassName(clsName)[0];
            return obj.getBoundingClientRect().top;
        }

        function getDom(clsName){
            var obj=document.getElementsByClassName(clsName)[0];
            return obj;
        }



        window.addEventListener('scroll',function(){
            var scrollT=document.documentElement.scrollTop||document.body.scrollTop;

            /*第二页动画的触发*/
            if(getTop('one')<550){
             
                getDom('card01').classList.add('hotmove');
                getDom('card02').classList.add('hotmove');
                getDom('card03').classList.add('hotmove');

            }
        })

