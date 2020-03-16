(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bib-labels~editions~login~participants"],{"1b2c":function(t,e,s){},"38cb":function(t,e,s){"use strict";var i=s("a9ad"),n=s("7560"),a=s("3206"),r=s("80d2"),l=s("d9bd"),o=s("58df");e["a"]=Object(o["a"])(i["a"],Object(a["a"])("form"),n["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(r["i"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],n="function"===typeof t?t(e):t;!1===n||"string"===typeof n?s.push(n||""):"boolean"!==typeof n&&Object(l["b"])(`Rules should return a string or boolean, received '${typeof n}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}})},"4bd4":function(t,e,s){"use strict";var i=s("58df"),n=s("7e2b"),a=s("3206");e["a"]=Object(i["a"])(n["a"],Object(a["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"4ff9":function(t,e,s){},"7cfa":function(t,e,s){"use strict";function i(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=null!==t.$i18n?t.$i18n:t.$root.$i18n;if(e.response&&e.response.status){if(e.response&&e.response.data&&e.response.data.detail)return e.response.data.detail;if(403===e.response.status)return i.t("error.invalid-"+(s?"credentials":"authorization"))}return i.t("error.network")}s.d(e,"a",(function(){return i}))},8547:function(t,e,s){"use strict";var i=s("2b0e"),n=s("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},8654:function(t,e,s){"use strict";s("4ff9");var i=s("c37a"),n=(s("e9b1"),s("7560")),a=s("58df"),r=Object(a["a"])(n["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:s}=e,i=parseInt(s.max,10),a=parseInt(s.value,10),r=i?`${a} / ${i}`:String(s.value),l=i&&a>i;return t("div",{staticClass:"v-counter",class:{"error--text":l,...Object(n["b"])(e)}},r)}}),l=r,o=s("ba87"),h=s("90a2"),u=s("d9bd"),d=s("2b0e");function c(t){return"undefined"!==typeof window&&"IntersectionObserver"in window?d["a"].extend({name:"intersectable",mounted(){h["a"].inserted(this.$el,{name:"intersect",value:{handler:this.onObserve}})},destroyed(){h["a"].unbind(this.$el)},methods:{onObserve(e,s,i){if(i)for(let n=0,a=t.onVisible.length;n<a;n++){const e=this[t.onVisible[n]];"function"!==typeof e?Object(u["c"])(t.onVisible[n]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}}):d["a"].extend({name:"intersectable"})}var p=s("297c"),g=s("38cb"),f=s("5607"),b=s("80d2");const v=Object(a["a"])(i["a"],c({onVisible:["setLabelWidth","setPrefixWidth","setPrependWidth","tryAutofocus"]}),p["a"]),m=["color","file","time","date","datetime-local","week","month"];e["a"]=v.extend().extend({name:"v-text-field",directives:{ripple:f["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=g["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):(this.internalValue||"").toString().length},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||m.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder)},labelValue(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder)}},watch:{labelValue:"setLabelWidth",outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&Object(u["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(u["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(u["c"])("shaped should be used with either filled or outlined",this)},mounted(){this.autofocus&&this.tryAutofocus(),this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth(),requestAnimationFrame(()=>this.isBooted=!0)},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame(()=>{this.$refs.input&&this.$refs.input.blur()})},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick(()=>this.internalValue=null)},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots["append"]?t.push(this.$slots["append"]):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){if(!this.clearable)return null;const t=this.isDirty?void 0:{attrs:{disabled:!0}};return this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback,t)])},genCounter(){if(!1===this.counter||null==this.counter)return null;const t=!0===this.counter?this.attrs$.maxlength:this.counter;return this.$createElement(l,{props:{dark:this.dark,light:this.light,max:t,value:this.computedCounterValue}})},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(o["a"],t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(b["g"])(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);return delete t["change"],this.$createElement("input",{style:{},domProps:{value:this.lazyValue},attrs:{...this.attrs$,autofocus:this.autofocus,disabled:this.disabled,id:this.computedId,placeholder:this.placeholder,readonly:this.readonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"})},genMessages(){if(!0===this.hideDetails)return null;const t=i["a"].options.methods.genMessages.call(this),e=this.genCounter();return"auto"!==this.hideDetails||t||e?this.$createElement("div",{staticClass:"v-text-field__details"},[t,e]):null},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(){this.isFocused||this.disabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===b["u"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),i["a"].options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),i["a"].options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&this.$refs.label&&(this.labelWidth=Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24))},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){return!(!this.autofocus||"undefined"===typeof document||!this.$refs.input||document.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)}}})},"8ff2":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return o}));var i=s("b0af"),n=s("80d2");const a=Object(n["h"])("v-card__actions"),r=Object(n["h"])("v-card__subtitle"),l=Object(n["h"])("v-card__text"),o=Object(n["h"])("v-card__title");i["a"]},ba87:function(t,e,s){"use strict";s("1b2c");var i=s("a9ad"),n=s("7560"),a=s("58df"),r=s("80d2"),l=Object(a["a"])(n["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:s,listeners:a,props:l}=e,o={staticClass:"v-label",class:{"v-label--active":l.value,"v-label--is-disabled":l.disabled,...Object(n["b"])(e)},attrs:{for:l.for,"aria-hidden":!l.for},on:a,style:{left:Object(r["g"])(l.left),right:Object(r["g"])(l.right),position:l.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(l.focused&&l.color,o),s)}});e["a"]=l},c37a:function(t,e,s){"use strict";s("d191");var i=s("9d26"),n=s("ba87"),a=(s("8ff2"),s("a9ad")),r=s("7560"),l=s("58df"),o=s("80d2"),h=Object(l["a"])(a["a"],r["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(o["p"])(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=h,d=s("7e2b"),c=s("38cb"),p=s("d9f7");const g=Object(l["a"])(d["a"],c["a"]);var f=g.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isDisabled(){return this.disabled||this.readonly},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.messagesToDisplay.length>0}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,s={}){const n=this[`${t}Icon`],a=`click:${Object(o["t"])(t)}`,r=!(!this.listeners$[a]&&!e),l=Object(p["a"])({attrs:{"aria-label":r?Object(o["t"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:r?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(a,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${Object(o["t"])(t)}`:void 0},[this.$createElement(i["a"],l,n)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(o["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(n["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.disabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>Object(o["p"])(this,"message",t)}}):null},genSlot(t,e,s){if(!s.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},s)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=f},d191:function(t,e,s){},e9b1:function(t,e,s){}}]);