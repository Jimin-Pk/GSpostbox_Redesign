function joinForm() {
    let jf = document.joinform; 
    
    const n = document.forms["joinform"]["name"].value;
    if (n == null || n =="")
    {alert("이름을 입력하세요.");
      return false; 
    } 

    const pmatch = document.forms["joinform"]["tel"].value;
    if (pmatch == null || pmatch =="")
    {alert("'-'을 넣지 말고 11자리의 전화번호를 입력해주세요");
    return false;
    }
   
    // const id = document.forms["joinform"]["id"].value;
    // if (id ==null || id == "")
    // {alert("숫자와 영문만 조합하여 아이디를 작성하세요.");
    const reg_exp0 = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,18}$");
    const idmatch = reg_exp0.exec(jf.id.value);
    if (idmatch == null){
        alert("숫자, 영문을 조합하여 입력하세요.");
    return false; 
    }

    const reg_exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$");
    const pwmatch = reg_exp.exec(jf.pw.value);
    if (pwmatch==null){
      alert("숫자, 영문, 특수문자 중 2가지를 조합하여 8~16자리 비밀번호를 입력하세요.");
      return false;
    }
    
    const pw1 = document.forms["joinform"]["pw"].value;
    const pw2 = document.forms["joinform"]["pw1"].value;
    if (pw1 != pw2)
    {alert("비밀번호가 일치하지 않습니다. 한 번 더 입력해주세요.");
    return false;
    }
 
    const em = document.forms["joinform"]["email"].value;
    if (em == null || em =="")
    {alert("이메일 주소를 입력하세요");
      return false;
    }

    const ad = document.forms["joinform"]["address"].value;
    if (ad == null || ad =="")
    {alert("기본주소를 입력해 주세요");
      return false;
    }

    const ad1 = document.forms["joinform"]["address1"].value;
    if (ad1 == null || ad1 =="")
    {alert("상세주소를 입력해 주세요");
      return false;
    }
}