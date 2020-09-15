package FirstAssigment;

public class Checkout {

	private int runningTotal = 0;
	
	public void add(Integer int1, int item_price) {
		// TODO Auto-generated method stub
		runningTotal = runningTotal + (int1.intValue() * item_price) ;
		
	}

	public Object total() {
		// TODO Auto-generated method stub
		return this.runningTotal;
		//return 80;
	}

	public void restart(int i) {
		// TODO Auto-generated method stub
		this.runningTotal=i;
	}
	

}
