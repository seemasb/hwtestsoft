package FirstAssigmentPackage;

import static org.junit.Assert.assertEquals;

import FirstAssigment.Checkout;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CheckoutProcess {

	private Checkout c=new Checkout();;
	//private int Item_price=0;
	
	//new
	private String [] fruits = new String [10] ;
	private int [] prices = new int [10];
	private int array_counter=0;
	private boolean flag = false;
	
	@Given("the price of a {string} is {int}")
	public void thePriceOfAIs(String string, Integer int1) {
		//this.Item_price=int1;
		//new
		
		c.restart(0);
		
		for(int j=0; j<fruits.length ; j++) {
			if(fruits[j] == string) {flag=true; break; }
			else flag=false;
		}
		
		if (flag == false) {
			fruits[array_counter]=string;
			prices[array_counter]=int1.intValue();
			array_counter++;
			
		}
	}
	 
	
	@When("I checkout {int} {string}")
	public void iCheckout(Integer int2, String string) {
		//c.add(int2,this.Item_price);
		
		//new
		int j;
		for(j=0; j<fruits.length ; j++) {
			if(fruits[j].equalsIgnoreCase(string)) break;
			
		}
		c.add(int2,prices[j]);

		

}
	
	
	@Then("the total price should be {int}")
	public void TotalPriceShouldBe(Integer int1) {
		 assertEquals(c.total(), int1.intValue());
	}
}
