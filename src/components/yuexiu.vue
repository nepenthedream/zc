<template>

	<div class="index">
		<el-row :gutter="20" style="height: calc(50% - 40px);">
			<el-col :span="8">
				<div class="grid-content bg-purple" style="border: 0;padding: 0;">
					 <div>
  </div>
					<ul style="overflow: hidden;height: 100%;">
						<li class="li-style li-color1">
							<p style="margin-top: 15px;">已办理案件</p>
							<p><span>1999,999,999</span>人</p>
						</li>
						<li class="li-style" style="background: #46c37b;">
							<p>批准逮捕</p>
							<p><span style="font-size:36px;">1999,9</span>人</p>
						</li>
						<li class="li-style li-style-right " style="background: #2e8ded;">
							<p>不批准逮捕</p>
							<p><span style="font-size:36px;">1999,99</span>人</p>
						</li>
						<li class="li-style" style="background: #6699cc;">
							<p>不起诉</p>
							<p><span style="font-size:36px;">1999,9</span>人</p>
						</li>
						<li class="li-style li-style-right" style="background: #666699;">
							<p>提起公诉</p>
							<p><span style="font-size:36px;">1999,99</span>人</p>
						</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light">
					<div class="title-h">
						案件阶段分布
					</div>
					<div style="display: flex;justify-content:center;align-items:center;height: calc(100% - 25px);">
						<div class='work-box'>
							<div class="box">
								<div class="one" style="color: #67c23a;">
									<div class="one-1"></div>
								</div>
								<div class="two" style="color: #67c23a;">
									<div class="two-1"></div>
								</div>
								<div class="third">
									<p>侦查阶段</p>
									<p>1997</p>
								</div>
							</div>
						</div>

						<div class='work-box'>
							<div class="box">
								<div class="one" style="color: #20a0ff;">
									<div class="one-1"></div>
								</div>
								<div class="two" style="color: #20a0ff;">
									<div class="two-1"></div>
								</div>
								<div class="third">
									<p>审查起诉</p>
									<p>1997</p>
								</div>
							</div>
						</div>

						<div class='work-box'>
							<div class="box">
								<div class="one" style="color: #67c23a;">
									<div class="one-1"></div>
								</div>
								<div class="two" style="color: #67c23a;">
									<div class="two-1"></div>
								</div>
								<div class="third">
									<p>审判阶段</p>
									<p>1997</p>
								</div>
							</div>
						</div>

						<div class='work-box'>
							<div class="box">
								<div class="one" style="color: #8e71c7;">
									<div class="one-1"></div>
								</div>
								<div class="two" style="color:#8e71c7;">
									<div class="two-1"></div>
								</div>
								<div class="third">
									<p>已审判</p>
									<p>1997</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div>
						<div class="title-h">待办事项</div>
						<div style="float: right;margin-bottom: 10px;">
							<el-radio-group v-model="radio1">
								<el-radio :label="1">待签收</el-radio>
								<el-radio :label="2">待办理</el-radio>
								<el-radio :label="3">待回复</el-radio>
							</el-radio-group>
						</div>
					</div>
					<el-table :data="tableData" style="width: 100%;height: 75%;" class="elTable">
						<el-table-column type="index" label="序号">
						</el-table-column>
						<el-table-column prop="name" label="案件名称">
						</el-table-column>
						<el-table-column prop="time" label="上一个单位办理时间">
						</el-table-column>
						<el-table-column prop="operation" label="操作" width="50">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div class="block" style="margin: auto;">
						<el-pagination layout="prev, pager, next" :total="1000">
						</el-pagination>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;height: calc(50% - 20px);">
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div style="height: 50px;">
						<div class="title-h">各行政区划案件分布</div>
						<div style="float: right;">
							<el-radio-group v-model="radio2">
								<el-radio :label="1">近七天</el-radio>
								<el-radio :label="2">当月</el-radio>
								<el-radio :label="3">今年</el-radio>
							</el-radio-group>
						</div>
					</div>
					<div id="container1" style="height:80%;width: 100%;background: #fff;"></div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light">
					<div style="height: 50px;">
						<div class="title-h">各类案件数量<span style="font-weight: 400;font-size: 14px;">(前十)</span></div>
						<div style="float: right;">
							<el-radio-group v-model="radio3">
								<el-radio :label="1">近七天</el-radio>
								<el-radio :label="2">当月</el-radio>
								<el-radio :label="3">今年</el-radio>
							</el-radio-group>
						</div>
					</div>
					<!--<el-select v-model="value7"  placeholder="请搜索选择" >
								<el-option v-for="item in cities" :key="index" :label="item.label" :value="item.valu">
								</el-option>
							</el-select>-->
					<div id="container" style="height:80%;width: 100%;background: #fff;"></div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="title-h">最新动态</div>
					<el-table :data="hotnews" style="width: 100%">
						<el-table-column prop="date">
						</el-table-column>
						<el-table-column prop="name">
						</el-table-column>
						<el-table-column prop="address">
						</el-table-column>
					</el-table>
				
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'yuexiu',
		data() {
			return {
				radio1: 1,
				radio2: 1,
				radio3: 1,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '李思思杀人案'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '李思思杀人案'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '李思思杀人案'
				}],
				hotnews: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '李思思杀人案'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '李思思杀人案'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '李思思杀人案'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '李思思杀人案'
				}],
//				     cities: [{
//        value: 'Beijing',
//        label: '北京'
//      }, {
//        value: 'Shanghai',
//        label: '上海'
//      }, {
//        value: 'Nanjing',
//        label: '南京'
//      }, {
//        value: 'Chengdu',
//        label: '成都'
//      }, {
//        value: 'Shenzhen',
//        label: '深圳'
//      }, {
//        value: 'Guangzhou',
//        label: '广州'
//      }, {
//        value: 'Shanghai',
//        label: '上海'
//      }, {
//        value: 'Nanjing',
//        label: '南京'
//      }, {
//        value: 'Chengdu',
//        label: '成都'
//      }, {
//        value: 'Shenzhen',
//        label: '深圳'
//      }, {
//        value: 'Guangzhou',
//        label: '广州'
//      }],
//      value6: ''
			}
		},
		methods: {
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('container')); //图表一
				let myChart1 = this.$echarts.init(document.getElementById('container1')); //图表二
				myChart.setOption({
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'line' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						top: 10,
						left: '1%',
						right: '1%',
						bottom: '1%',
						containLabel: true
					},
					lable: {
						normal: {
							textStyle: {
								fontsize: '10'
							}
						}
					},
					xAxis: [{
						type: 'category',
						data: ['故意杀人', '故意伤害', '强奸', '抢劫', '绑架', '贩卖毒品', '放火', '盗窃', '投放危险物质', '其他'],
						axisLabel: {
							interval: 0,
							rotate: 30
						},
						boundaryGap: true
					}],
					yAxis: [{
						type: 'value',
						max: 1200,
						axisLabel: {}
					}],
					series: [{
						name: '直接访问',
						type: 'bar',
						barBorderWidth: 10,
						barWidth: '40%',
						data: [10, 52, 200, 334, 390, 330, 220, 220]
					}],
				});
				myChart1.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						left: 'right',
						orient: 'vertical',
						x: 'center',
						y: 'bottom',
						data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							magicType: {
								show: true,
								type: ['pie', 'funnel']
							}
						}
					},
					calculable: true,
					series: [{
						name: '半径模式',
						type: 'pie',
						radius: [20, 110],
						center: ['50%', '50%'],
						roseType: 'radius',
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: true
							}
						},
						lableLine: {
							normal: {
								show: false
							},
							emphasis: {
								show: true
							}
						},
						data: [{
								value: 10,
								name: 'rose1'
							},
							{
								value: 5,
								name: 'rose2'
							},
							{
								value: 15,
								name: 'rose3'
							},
							{
								value: 25,
								name: 'rose4'
							},
							{
								value: 20,
								name: 'rose5'
							},
							{
								value: 35,
								name: 'rose6'
							},
							{
								value: 30,
								name: 'rose7'
							},
							{
								value: 40,
								name: 'rose8'
							}
						],
						itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        },
                        color: function(params) {
                            var colorarrays = ["#33c5e9","#9ee7b8","#ffdb5b","#FF9F80","#fb7193","#e7bcf3","#8378ea","#fb7191","#8378ea","#33c5e9","#9ee7b8","#ffdb5b","#38a2da"];
                            return colorarrays[params.dataIndex];
                        }
                    }
                }
						
					}]
				});
				window.onresize = function() {
					myChart.resize();
					myChart1.resize(); //若有多个图表变动，可多写
				}
			}
		},
		mounted() {
			this.drawLine(); //初始化地图
		}
		
	}
</script>

<style>
	.index {
		height: 100%;
		min-height: 800px;
		padding: 10px;
		background: #fff !important;
	}
	
	.li-style {
		padding: 15px;
		float: left;
		width: 48%;
		height: calc(30% - 10px);
		font-size: 20px;
		margin: 5px 0;
		color: #fff;
		font-size: 20px;
		text-align: center;
		background-color: #ff9900;
		-moz-box-shadow: -1px 1px 10px #888888;
		box-shadow: -1px 1px 10px #888888;
		border-radius: 5px;
	}
	
	.li-style-right {
		float: right;
	}
	
	.li-color1 {
		width: 100%;
		height: 38%;
		text-align: left;
		background: #f93;
		font-size: 36px;
		display: table-cell;
		vertical-align: middle;
	}
	.work-box {
		width: 100px;
		height: 100px;
		position: relative;
		/*margin-left: 10px;*/
		/*float: left;*/
		/*margin-top: 14px;*/
		margin: auto;
	}
	
	.box {
		width: 100px;
		height: 100px;
		position: absolute;
		top: 0px;
		left: 0;
		/* margin: -100px -100px 0 0; */
		display: -webkit-box;
		/* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
		display: -moz-box;
		/* Firefox 17- */
		display: -webkit-flex;
		/* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
		display: -moz-flex;
		/* Firefox 18+ */
		display: -ms-flexbox;
		/* IE 10 */
		display: flex;
		/* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
		align-items: center;
		justify-content: center;
	}
	
	.one {
		width: 100%;
		height: 100%;
		position: absolute;
		border-style: solid;
		border-radius: 50%;
		color: mediumpurple;
		/* border-color: currentcolor transparent; */
		--deg: -45deg;
		animation-direction: normal;
		animation: animate 5s linear infinite;
	}
	
	.one-1 {
		position: absolute;
		width: 50%;
		height: 0px;
		top: 50%;
		left: 50%;
		background: #ccc;
		transform: rotate(var(--deg));
		transform-origin: left;
	}
	
	.two {
		width: 80%;
		height: 80%;
		position: absolute;
		border-style: solid;
		border-radius: 50%;
		color: mediumpurple;
		border-color: currentcolor transparent;
		--deg: -230deg;
		animation: animate 5s linear infinite;
		animation-direction: reverse;
	}
	
	.third {
		position: absolute;
		text-align: center;
	}
	
	.two-1 {
		position: absolute;
		width: 50%;
		height: 0px;
		top: 50%;
		left: 50%;
		background: #ccc;
		transform: rotate(var(--deg));
		transform-origin: left;
	}
	
	@keyframes animate {
		to {
			transform: rotate(1turn);
		}
	}
	
	.el-col-8 {
		height: 100%;
	}
	
	.el-col-8 .grid-content {
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 10px;
		height: 100%;
		min-height: 385px;
	}
	
	.el-col-6 .grid-content {
		border: 0;
	}
	
	.elTable td,
	.elTable th {
		padding: 5px 0 !important;
	}
	
	.el-radio__inner {
		border-radius: 0;
	}
	
	.el-radio__inner::after {
		background-color: #409EFF;
	}
	
	.title-h {
		font-weight: 700;
		font-size: 18px;
	}
</style>