package medico.medico.Respones;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class JWTResponseData 
{	
	private boolean status;
	private String token;
	private String msg;
	private String hospitalid;
	
	
	/* public JWTResponseData(boolean status, String token, String msg,String hospitalid) {
		super();
		this.status = status;
		this.token = token;
		this.msg = msg;
		this.hospitalid=hospitalid;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	} */
}
