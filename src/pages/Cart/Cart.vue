<template>
  <div class="cartContainer">
    <!-- 头部 -->
    <div class="header">
      <span class="title">购物车</span>
      <div class="ticket">领劵</div>
      <span class="update">编辑</span>
    </div>
    <!-- 提示 -->
    <ul class="hint">
      <li class="item">
        <i class="point"></i>
        <span class="content">30天无忧退货</span>
      </li>
      <li class="item">
        <i class="point"></i>
        <span class="content">48小时快速退款</span>
      </li>
      <li class="item" style="margin-right:0">
        <i class="point"></i>
        <span class="content">满99元免邮费</span>
      </li>
    </ul>
    <!-- 活动 -->
    <div class="activity">
      <div class="head">
        <span class="gift">全场换购</span>
        <span class="content">再购99元享低至9.9超值换购</span>
        <span class="goCrowdordering">再逛逛<i class="iconfont icon-xiangyou"></i></span>
      </div>
      <div class="foot">
        <span class="content">查看换购商品</span>
        <i class="iconfont icon-xiangyou"></i>
      </div>
    </div>
    <!-- 商品列表 -->
    <ul class="shopList">
      <li class="shopItem">
        <!-- 商品活动等 -->
        <div v-if="isActivity" class="shopActivity">
          <div class="detail">
            <i class="state iconfont icon-weixuanzhong-01"></i>
            <span class="gift">满赠</span>
            <span class="content">再购470元立享,满599元领赠品</span>
            <span class="goCrowdordering">去凑单<i class="iconfont icon-xiangyou"></i></span>
          </div>
          <div class="more">
            <span class="content">查看赠品</span>
            <i class="iconfont icon-xiangyou"></i>
          </div>
        </div>
        <!-- 商品详情 -->
        <div class="shopDetail">
          <i class="state iconfont icon-weixuanzhong-01"></i>
          <div class="shopImg">
            <img class="image" src="../../assets/images/1.jpg">
            <div class="limit">限购1件</div>
          </div>
          <div class="shopInfo">
            <div class="title">
              <span class="newUser">新人特价包邮</span>
              <span>Air真无线耳机,空气感佩戴,2020年全新款</span>
            </div>
            <div class="type">白色<i class="iconfont icon-xiangxia"></i></div>
            <div class="price">
              <span class="newPrice">¥299</span>
              <span class="oldPrice">¥450</span>
            </div>
            <div class="number">
              <div class="decrement">-</div>
              <div class="numberInput">
                <input class="input" type="text" v-model="shopNumber">
              </div>
              <div class="increment">+</div>
            </div>
          </div>
        </div>
        <!-- 其他活动 -->
        <div class="moreActivity">
          <p>• 新人优惠活动每用户仅限参与一次</p>
        </div>
      </li>
      <li class="shopItem">
        <!-- 商品活动等 -->
        <div v-if="0" class="shopActivity">
          <div class="detail">
            <i class="state iconfont icon-weixuanzhong-01"></i>
            <span class="gift">满赠</span>
            <span class="content">再购470元立享,满599元领赠品</span>
            <span class="goCrowdordering">去凑单<i class="iconfont icon-xiangyou"></i></span>
          </div>
          <div class="more">
            <span class="content">查看赠品</span>
            <i class="iconfont icon-xiangyou"></i>
          </div>
        </div>
        <!-- 商品详情 -->
        <div class="shopDetail">
          <i class="state iconfont icon-weixuanzhong-01"></i>
          <div class="shopImg">
            <img class="image" src="../../assets/images/1.jpg">
            <div class="limit">限购1件</div>
          </div>
          <div class="shopInfo">
            <div class="title">
              <span class="newUser">新人特价包邮</span>
              <span>Air真无线耳机,空气感佩戴,2020年全新款</span>
            </div>
            <div class="type">白色<i class="iconfont icon-xiangxia"></i></div>
            <div class="price">
              <span class="newPrice">¥299</span>
              <span class="oldPrice">¥450</span>
            </div>
            <div class="number">
              <div class="decrement">-</div>
              <div class="numberInput">
                <input class="input" type="text" v-model="shopNumber">
              </div>
              <div class="increment">+</div>
            </div>
          </div>
        </div>
        <!-- 其他活动 -->
        <div class="moreActivity">
          <p>• 新人优惠活动每用户仅限参与一次</p>
        </div>
      </li>
    </ul>
    <!-- 底部 -->
    <div class="footer">
      <i class="allState iconfont icon-weixuanzhong-01"></i>
      <span class="checked">已选(0)</span>
      <span class="allMoney">合计：¥0</span>
      <div class="goPay">下单</div>
    </div>
    <!-- 占位盒子 -->
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data(){
    return{
      isActivity:true,
      shopNumber:1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cartContainer{
    background-color: #eeeeee;
    .header{
      width: 100%;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      padding: 0 15px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,.15);
      position: relative;
      .title{
        font-size: 18px;
        float: left;
      }
      .update{
        font-size: 15px;
        float: right;
      }
      .ticket{
        position: absolute;
        left: 280px;
        top: 12px;
        width: 36px;
        height: 19px;
        background-image: linear-gradient(-45deg,#FC865F 0,#FC625F 100%);
        color: #fff;
        line-height: 19px;
        text-align: center;
        &:before{
          content: '';
          display: block;
          clear: both;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          left: -6px;
          top: 5px;
        }
        &:after{
          content: '';
          display: block;
          clear: both;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          right: -6px;
          top: 5px;
        }
      }
    }
    .hint{
      width: 100%;
      height: 35px;
      line-height: 35px;
      padding: 0 15px;
      box-sizing: border-box;
      color: #666;
      .item{
        float: left;
        margin-right: 42px;
        .point{
          width: 3px;
          height: 3px;
          border: 1px solid rgba(0,0,0,.15);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          top: -2px;
          margin-right: 2px;
        }
      }
    }
    .activity{
      width: 100%;
      height: 73px;
      box-sizing: border-box;
      padding: 0 15px;
      background-color: #fff;
      overflow: hidden;
      .head{
        margin-top: 10px;
        .gift{
          display: inline-block;
          width:48px;
          height: 16px;
          background-image: linear-gradient(-225deg,#FC865F 0,#FC625F 100%);
          color: #fff;
          line-height: 16px;
          padding: 0 4px;
          border-radius: 2px;
          margin-right: 8px;
        }
        .content{
          font-size: 14px;
        }
        .goCrowdordering{
          float: right;
          color: #DD1A21;
          .iconfont{
            font-size: 12px;
          }
        }
      }
      .foot{
        width: 317px;
        height: 28px;
        line-height: 28px;
        box-sizing: border-box;
        padding: 0 13px;
        background-image: linear-gradient(-225deg,rgba(252,134,95,.05),rgba(252,98,95,.05) 100%);
        margin-top: 10px;
        margin-left: 20px;
        border-radius: 2px;
        .iconfont{
          font-size: 12px;
          float: right;
        }
      }
    }
    .shopList{
      margin-top: 10px; 
      .shopItem{
        background-color: #fff;
        padding: 0 15px;
        overflow: hidden;
        margin-top: 10px;
        .shopActivity{
          .detail{
            margin-top: 15px;
            height: 20px;
            line-height: 20px;
            .gift{
              display: inline-block;
              height: 16px;
              background-image: linear-gradient(-225deg,#FC865F 0,#FC625F 100%);
              color: #fff;
              line-height: 16px;
              padding: 0 4px;
              border-radius: 2px;
              margin-right: 8px;
            }
            .content{
              font-size: 14px;
            }
            .goCrowdordering{
              float: right;
              color: #DD1A21;
              .iconfont{
                font-size: 12px;
              }
            }
            .state{
              font-size: 20px;
              color: #999;
              margin-right: 8px;
            }
          }
          .more{
            width: 317px;
            height: 28px;
            line-height: 28px;
            box-sizing: border-box;
            padding: 0 13px;
            background-image: linear-gradient(-225deg,rgba(252,134,95,.05),rgba(252,98,95,.05) 100%);
            margin-top: 10px;
            margin-left: 20px;
            border-radius: 2px;
            .iconfont{
              font-size: 12px;
              float: right;
            }
          }
        }
        .shopDetail{
          margin-top:20px;
          overflow: hidden;
          .state{
            float: left;
            font-size: 20px;
            color: #999;
            margin-right: 8px;
            position: relative;
            top: 30px;
          }
          .shopImg{
            float: left;
            width: 86px;
            height: 86px;
            margin-right: 10px;
            position: relative;
            border-radius: 4px;
            .image{
              width: 86px;
              height: 86px; 
              border-radius: 4px;
            }
            .limit{
              position: absolute;
              bottom: 0;
              left: 0;
              width: 86px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              color: #fff;
              background-color: #f48f18;
              border-radius: 0 0 4px 4px;     
            }
          }
          .shopInfo{
            float: right;
            width: 221px;
            box-sizing: border-box;
            position: relative;
            .title{
              font-size: 14px;
              .newUser{
                font-size: 14px;
                color:#f48f18;
                margin-right: 2px;
              }
            }
            .type{
              width: 40px;
              height: 18px;
              line-height: 18px;
              background-color: #FAFAFA;
              color: #7F7F7F;
              padding: 0 5px;
              border: 1px solid rgba(0,0,0,.15);
              margin-top:4px;
              .iconfont{
                font-size:12px;
                margin-left: 2px;
              }
            }
            .price{
              margin-top: 8px;
              font-size: 14px;
              .newPrice{
                margin-right: 2px;
              }
              .oldPrice{
                color:#7F7F7F;
                text-decoration-line: line-through;
              }
            }
            .number{
              height: 28px;
              line-height: 28px;
              position: absolute;
              right: 0;
              top: 60px;
              .decrement{
                width: 29px;
                height: 26px;
                line-height: 22px;
                text-align: center;
                box-sizing: border-box;
                background-color: transparent;
                border: 1px solid rgba(0,0,0,.15);
                font-size: 22px;
                color: #7F7F7F;
                display: inline-block;
              }
              .increment{
                width: 29px;
                height: 26px;
                line-height: 22px;
                text-align: center;
                box-sizing: border-box;
                background-color: transparent;
                border: 1px solid rgba(0,0,0,.15);
                font-size: 22px;
                color: #7F7F7F;
                display: inline-block;
              }
              .numberInput{
                width: 29px;
                height: 26px;
                line-height: 28px;
                box-sizing: border-box;
                border: 1px solid rgba(0,0,0,.35);
                display: inline-block;
                .input{
                  width: 27px;
                  height: 20px;
                  border: none;
                  outline: 0;
                  text-align: center;
                  margin-top: -5px;
                }
              }
            }
          } 
        }
        .moreActivity{
          margin-top: 15px;
          width: 302px;
          height: 16px;
          padding: 10px;
          background-color: #f4f4f4;
          color: #7F7F7F;
          margin-left: 28px;
          border-radius: 2px;
          margin-bottom: 15px;
        }
      }
    }
    .footer{
      width: 100%;
      height: 59px;
      line-height: 59px;
      box-sizing: border-box;
      background-color: #fff;
      position: fixed;
      bottom: 46px;
      z-index: 4;
      border-top: 1px solid rgba(0,0,0,.15);
      padding-left: 15px;
      font-size: 14px;
      .allState{
        font-size: 20px;
        color: #999;
        margin-right: 8px;
      }
      .checked{
        color: #7f7f7f;
      }
      .allMoney{
        color: #DD1A21;
        margin-left: 100px;
      }
      .goPay{
        width: 113px;
        height: 59px;
        line-height: 59px;
        text-align: center;
        float: right;
        background-color: #ccc;
        color: #fff;

      }
    }
    .box{
      width: 100%;
      height: 1px;
      margin-top: 200px;
    }
  }
</style>
