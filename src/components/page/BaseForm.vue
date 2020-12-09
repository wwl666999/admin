<template>
    <div>
        <div class="container">
            <div class="form-box">
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="所在地" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择居住区域">
      <el-option label="金牛区" value="jinniu"></el-option>
      <el-option label="青羊区" value="qingyang"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="预定时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="是否长住" prop="stay">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="多选" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="活动一" name="type"></el-checkbox>
      <el-checkbox label="活动二" name="type"></el-checkbox>
      <el-checkbox label="活动三" name="type"></el-checkbox>
      <el-checkbox label="活动四" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="单选" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="单选一"></el-radio>
      <el-radio label="单选二"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="其他意见" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          stay: false,
          type: [],
          resource: '',
          desc: '',
          phone:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2到 5 个字符', trigger: 'blur' }
          ],
          phone:[
              {required:true,message:'请输入电话',trigger: 'blur'},
              {type:'number',min:11,max:11,message:'请输入11位手机号',trigger:'blur'}
          ],
          region: [
            { required: true, message: '请选择所在区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
          ],
          stay: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>