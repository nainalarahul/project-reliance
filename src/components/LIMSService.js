import React from 'react';
import "./css/LIMSSerivce.css";

const LIMSService = () => {

    const DefaultRef = React.useRef();
    const MicrosoftAspNetCoreRef = React.useRef();
    const AllowedHostsRef = React.useRef();
    const CorsOriginRef = React.useRef();
    const NameRef = React.useRef();
    const OpenApiTitleRef = React.useRef();
    const OpenApiVersionRef = React.useRef();
    const TermsOfServiceRef = React.useRef();
    const OpenApiDescRef = React.useRef();
    const OpenApiContactEmailRef = React.useRef();
    const OpenApiContactNameRef = React.useRef();
    const OpenApiContactUrlRef = React.useRef();
    const OpenApiLicenseNameRef = React.useRef();
    const OpenApiLicenseUrlRef = React.useRef();
    const BizOwnerRef = React.useRef();
    const BizOwnerMailRef = React.useRef();
    const EndPointSecuritySchemeRef = React.useRef();
    const EndPointSecurityAuthTypeRef = React.useRef();
    const EndPointSecurityUsernameRef = React.useRef();
    const TagsRef = React.useRef();
    const EndPointSecurityPasswordRef = React.useRef();
    const TechOwnerRef = React.useRef();
    const TechOwnerMailRef = React.useRef();
    const TiersCollectionRef = React.useRef();
    const VisibilityRef = React.useRef();
    const CorsAllowOriginsRef = React.useRef();
    const CorsAllowHeadersRef = React.useRef();
    const LoginRef = React.useRef();
    const PostLimsRef = React.useRef();
    const SslCallbackRef = React.useRef();
    const GranttypeRef = React.useRef();
    const ClientIdRef = React.useRef();
    const ClientSecretRef = React.useRef();
    const ScopeRef = React.useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {Logging:{LogLevel:
        {
        Default : DefaultRef.current.value,
        MicrosoftAspNetCore: MicrosoftAspNetCoreRef.current.value,
        }
        },
        CORSOrigin: CorsOriginRef.current.value,
        AllowedHosts: AllowedHostsRef.current.value,
        Name: NameRef.current.value,
        OpenApiTitle: OpenApiTitleRef.current.value,
        OpenApiVersion: OpenApiVersionRef.current.value,
        TermsOfService: TermsOfServiceRef.current.value,
        OpenApiDesc: OpenApiDescRef.current.value,
        OpenApiContactEmail: OpenApiContactEmailRef.current.value,
        OpenApiContactName: OpenApiContactNameRef.current.value,
        OpenApiContactUrl: OpenApiContactUrlRef.current.value,
        OpenApiLicenseName: OpenApiLicenseNameRef.current.value,
        OpenApiLicenseUrl: OpenApiLicenseUrlRef.current.value,
        SwaggerExtraInfo:{
            bizOwner: BizOwnerRef.current.value,
            bizOwnerMail: BizOwnerMailRef.current.value,
            endPointSecurityScheme: EndPointSecuritySchemeRef.current.value,
            endPointSecurityAuthType: EndPointSecurityAuthTypeRef.current.value,
            endPointSecurityUsername: EndPointSecurityUsernameRef.current.value,
            tags: TagsRef.current.value,
            endPointSecurityPassword: EndPointSecurityPasswordRef.current.value,
            techOwner: TechOwnerRef.current.value,
            techOwnerMail: TechOwnerMailRef.current.value,
            tiersCollection: TiersCollectionRef.current.value,
            visibility: VisibilityRef.current.value,
            CORSAllowOrigins: CorsAllowOriginsRef.current.value,
            CORSAllowHeaders: CorsAllowHeadersRef.current.value,
        },
        Uris:{
         Login:LoginRef.current.value,
         PostLims: PostLimsRef.current.value,
         sslCallback: SslCallbackRef.current.value,
        },
        RIL_Client_Details:{
        grant_type: GranttypeRef.current.value,
        clientId: ClientIdRef.current.value,
        clientSecret: ClientSecretRef.current.value,
        scope: ScopeRef.current.value,
        }
    };
        console.log(obj);
        const link = document.createElement('a');
        const url = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`
        link.href = url;
        link.download = 'appsettings.json';
        link.click();
    }

    return (
        <form onSubmit={submitHandler}  >
          <div class="text_imp">
            <h2> Select any field you want to Overwrite</h2>
          </div>

           <div class="default"> 
            <label htmlFor='Default'>Default &nbsp;&nbsp;</label>
            <input type='text' id='Default' defaultValue= "Information" ref={DefaultRef} /><br />
            </div>

           <div class="default"> 
            <label htmlFor='MicrosoftAspNetCore'>MicrosoftAspNetCore&nbsp;&nbsp;</label>
            <input type='text' id='MicrosoftAspNetCore' defaultValue= "Warning" ref={MicrosoftAspNetCoreRef} /><br />
            </div>
            
            <div class="default">  
            <label htmlFor='CORSOrigin'>CORSOrigin&nbsp;&nbsp;</label>
            <input type='text' id='CORSOrigin' defaultValue= "https://all the urls there are" ref={CorsOriginRef} /><br />
            </div>   

            <div class="default">  
            <label htmlFor='AllowedHosts'>AllowedHosts&nbsp;&nbsp;</label>
            <input type='text' id='AllowedHosts' defaultValue= "*" ref={AllowedHostsRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='Name'>Name&nbsp;&nbsp;</label>
            <input type='text' id='Name' defaultValue= "Information" ref={NameRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiTitle'>OpenApiTitle&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiTitle' defaultValue= "AIMAPI_NC_LIMSSerivceIntegration" ref={OpenApiTitleRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiVersion'>OpenApiVersion&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiVersion' defaultValue= "1.0.0" ref={OpenApiVersionRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='TermsOfService'>TermsOfService&nbsp;&nbsp;</label>
            <input type='text' id='TermsOfService' defaultValue= "http://ril.com" ref={TermsOfServiceRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiDesc'>OpenApiDesc&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiDesc' defaultValue= "Api description" ref={OpenApiDescRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiContactEmail'>OpenApiContactEmail&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiContactEmail' defaultValue= "ravi.ippili@ril.com" ref={OpenApiContactEmailRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiContactName'>OpenApiContactName&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiContactName' defaultValue= "Ravi Ippili" ref={OpenApiContactNameRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiContactUrl'>OpenApiContactUrl&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiContactUrl' defaultValue= "http://ril.com" ref={OpenApiContactUrlRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiLicenseName'>OpenApiLicenseName&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiLicenseName' defaultValue= "Apache License Version 2.0" ref={OpenApiLicenseNameRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='OpenApiLicenseUrl'>OpenApiLicenseUrl&nbsp;&nbsp;</label>
            <input type='text' id='OpenApiLicenseUrl' defaultValue= "http://www.apache.org/licenses/LICENSE_2.0" ref={OpenApiLicenseUrlRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='bizOwner'>bizOwner&nbsp;&nbsp;</label>
            <input type='text' id='bizOwner' defaultValue= "Information" ref={BizOwnerRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='bizOwnerMail'>bizOwnerMail&nbsp;&nbsp;</label>
            <input type='text' id='bizOwnerMail' defaultValue= "Information" ref={BizOwnerMailRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='endPointSecurityScheme'>endPointSecurityScheme&nbsp;&nbsp;</label>
            <input type='text' id='endPointSecurityScheme' defaultValue= "Information" ref={EndPointSecuritySchemeRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='endPointSecurityAuthType'>endPointSecurityAuthType&nbsp;&nbsp;</label>
            <input type='text' id='endPointSecurityAuthType' defaultValue= "Information" ref={EndPointSecurityAuthTypeRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='endPointSecurityUsername'>endPointSecurityUsername&nbsp;&nbsp;</label>
            <input type='text' id='endPointSecurityUsername' defaultValue= "Information" ref={EndPointSecurityUsernameRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='tags'>tags&nbsp;&nbsp;</label>
            <input type='text' id='tags' defaultValue="" ref={TagsRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='endPointSecurityPassword'>endPointSecurityPassword&nbsp;&nbsp;</label>
            <input type='text' id='endPointSecurityPassword' defaultValue="" ref={EndPointSecurityPasswordRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='techOwner'>techOwner&nbsp;&nbsp;</label>
            <input type='text' id='techOwner' defaultValue="" ref={TechOwnerRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='techOwnerMail'>techOwnerMail&nbsp;&nbsp;</label>
            <input type='text' id='techOwnerMail' defaultValue="" ref={TechOwnerMailRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='tiersCollection'>tiersCollection&nbsp;&nbsp;</label>
            <input type='text' id='tiersCollection' defaultValue="" ref={TiersCollectionRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='visibility'>visibility&nbsp;&nbsp;</label>
            <input type='text' id='visibility' defaultValue="" ref={VisibilityRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='CORSAllowOrigins'>CORSAllowOrigins&nbsp;&nbsp;</label>
            <input type='text' id='CORSAllowOrigins' defaultValue="" ref={CorsAllowOriginsRef} /><br />   
            </div>

            <div class="default">  
            <label htmlFor='CorsAllowHeaders'>CorsAllowHeaders&nbsp;&nbsp;</label>
            <input type='text' id='CorsAllowHeaders' defaultValue="" ref={CorsAllowHeadersRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='Login'>Login&nbsp;&nbsp;</label>
            <input type='text' id='Login' defaultValue="" ref={LoginRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='PostLims'>PostLims&nbsp;&nbsp;</label>
            <input type='text' id='PostLims' defaultValue="" ref={PostLimsRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='sslCallback'>sslCallback&nbsp;&nbsp;</label>
            <input type='text' id='sslCallback' defaultValue="" ref={SslCallbackRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='grant_type'>grant_type&nbsp;&nbsp;</label>
            <input type='text' id='grant_type' defaultValue="" ref={GranttypeRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='clientId'>clientId&nbsp;&nbsp;</label>
            <input type='text' id='clientId' defaultValue="" ref={ClientIdRef} /><br />
            </div>

            <div class="default">  
            <label htmlFor='clientSecret'>clientSecret&nbsp;&nbsp;</label>
            <input type='text' id='clientSecret' defaultValue="" ref={ClientSecretRef} /><br />
            </div>
            
            <div class="default">  
            <label htmlFor='scope'>scope&nbsp;&nbsp;</label>
            <input type='text' id='scope' defaultValue="" ref={ScopeRef} /><br />
            </div>
            <br/>
            <div class="text_imp">
            <h3>Click On Submit to Generate an appsettings.json File</h3>
            </div>
            <div class="default">
            <button class="button_submit">Submit</button>
            </div>
            
        </form>
    );
}

export default LIMSService;