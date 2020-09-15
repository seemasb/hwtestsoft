package FirstAssigmentPackage;


import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "FeatureCases" , 
plugin = { "html:target/cucumber/wikipedia.html"},
monochrome = true ,
snippets = SnippetType.CAMELCASE,
glue = {"FirstAssigmentPackage"},
strict = true )

public class AcceptanceTest {

}
