package  medico.medico.Respones;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Respones {
    private int code;
	private String msg;
	private Object data;
	private String token;
	private boolean status;
	
	
	
}
