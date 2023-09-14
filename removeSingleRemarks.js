const list = [{ "name": "tmp1", "remark": ""},
              { "name": "tmp2a", "remark": "PVACSDSD01 / 10.0.1.1"},
              { "name": "tmp2b", "remark": "PVACSDSD01 / 10.0.1.1"},
              { "name": "tmp3", "remark": "PVACSDSD01 / 10.0.1.2"},
              { "name": "tmp4", "remark": "PVACSDSD01"}];


const removeSingleRemarks = (list) => {
  const newList = [];
  for (const record of list) {
  	if (record.remark.split("/").length === 2) {
    	var length = list.filter((tmp)=> tmp.remark === record.remark).length;  
      if (length > 1) {
      	newList.push(record);
      }
    } else {
    	newList.push(record);
    }
  }
  return newList;
};

const result = removeSingleRemarks(list);

console.log(result);
