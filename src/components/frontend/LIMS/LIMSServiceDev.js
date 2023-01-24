
import React from 'react';
import '../css/LIMSService.css';
import { Text } from 'react-native-web';
import '../css/Services.css';
import Footer from '../footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIMSServiceDev = () => {
    document.title = "LIMS Services";
    const DefaultRef = React.useRef();
    const MicrosoftAspNetCoreRef = React.useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {Logging:{LogLevel:
        {
        Default : DefaultRef.current.value,
        MicrosoftAspNetCore: MicrosoftAspNetCoreRef.current.value,
        }
        },
    };
        console.log(obj);
        const link = document.createElement('a');
        const url = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`
        link.href = url;
        //take the link from here and try to directly push on to git.
        //details of the git to be taken from the user.
        link.download = 'appsettings_dev.json';
        link.click();
    }

    return (
        <view>
      <div class="center">
      <div class="rectangluarfield">
          <form onSubmit={submitHandler}  >
            <div class="maintext">
                <Text>
                    LIMS-Dev
                </Text>
            </div>
          <div class="text_imp">
            <Text> (Select the field to change value)</Text>
          </div>
           <div class="default"> 
            <label htmlFor='Default'>Default </label><br/>
            <input type='text' id='Default' defaultValue= "Information" ref={DefaultRef} /><br />
            </div>
           <div class="default"> 
            <label htmlFor='MicrosoftAspNetCore'>MicrosoftAspNetCore</label><br/>
            <input type='text' id='MicrosoftAspNetCore' defaultValue= "Warning" ref={MicrosoftAspNetCoreRef} /><br />
            </div>
            <br/>
            <div class="default">
            <button class="button_submit">
                push
                <FontAwesomeIcon icon="code-commit" />
            </button>
            </div>
        </form>
      </div>
      </div>
      <Footer /> 
      </view>
    );
}

export default LIMSServiceDev;

