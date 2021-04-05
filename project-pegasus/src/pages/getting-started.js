import React from "react";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
//image import
import postpic1 from '../images/getting-started/pic1.jpg'
import postpic2 from '../images/getting-started/pic2.jpg'
//CSS
import '../main.css'



export default class GettingStarted extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* title row */}
                    <Row>
                        <Col className="gsTitle">
                            <p>Getting Started</p>
                        </Col>
                    </Row>
                </Container>

                <div className="gsContain">
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column tabsTitle">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><p>Posting your first picture</p></Nav.Link>
                                        <hr className='hr-light' />
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><p>Getting Started with Astrophotography</p></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9} className="gsContent">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div>
                                            <Row>
                                                <Col>
                                                    <img
                                                        src={postpic1}
                                                        width="80%"
                                                        alt="help1"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="helpText">
                                                    <p>First of all, navigate to the upload page from the navigation bar. <br /> Click on "Upload into the Index".</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <img
                                                        src={postpic2}
                                                        width="80%"
                                                        alt="help2"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="helpText">
                                                    <p>
                                                        Upon clicking and entering, you'll see this page.
                                                        <br />
                                                        <sub>psst, scroll down if you only see the word "Upload"

                                                        </sub>
                                                    </p>
                                                    <br />
                                                    <p>
                                                        1. Here you will enter the Title of your post. Name it well and short! This is the first thing everybody sees!
                                                    </p>
                                                    <br />
                                                    <p>
                                                        2. The image URL will go into this. A preview of the picture will be display in the box above!
                                                        <br />
                                                        <sub>We're sorry we couldn't accept direct upload of your image for now!</sub>
                                                    </p>
                                                    <br />
                                                    <p>
                                                        3. Choose your category in the drop-down selection here. Remember to choose the category correctly! This will determine where your picture ends up at!
                                                    </p>
                                                    <br />
                                                    <p>
                                                        4. Enter your name or username/alias here so people know who you are.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        5. You can specifiy your location here, you don't have to be detailed, just your country or state will do! This isn't necessary.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        6. This is Important! The Personal Index is a 4 digit passcode that allows you to update or delete your post as and when you want. <br /> Please remember your own Personal Index Code!
                                                    </p>
                                                    <br />
                                                    <p>
                                                        7. List the equipments you used.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        8. Here is where you can list down what you have done to the picture as post-processings.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        9. Finally, click this button to submit your post and there you go! Your post will be displayed in its respective category!
                                                    </p>
                                                    <br />

                                                </Col>
                                            </Row>
                                        </div>

                                    </Tab.Pane>


                                    <Tab.Pane eventKey="second">
                                        <Accordion>
                                            <Card className="gsCard">
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="0">Getting Properly Started</Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0" className="gsAccordBack">
                                                    <Card.Body>
                                                        <p>
                                                            The acquisition of astro-photos can be as simple as setting up your camera on a tripod, or as complicated as launching a multi-million dollar satellite into space. Since you wont likely be launching satellites, here are some examples of what is possible using increasingly complex tiers.
                                                        <br />
                                                            The following is a breakdown of various kinds of imaging setups.
                                                        <br />
                                                        </p>
                                                        <hr className='hr-light' />
                                                        <h4>
                                                            Tier 1: A simple DSLR and a Tripod
                                                        </h4>
                                                        <hr className='hr-light' />
                                                        <p>
                                                            <h5>Parts labelled in order:</h5><br />

                                                            <h5>Camera:</h5><br />

                                                            The camera is an integral part of any astrophotography setup. A DSLR or similar is required due to the ability to shoot in RAW and adjust exposure times at will. The ability to switch between lenses allows for attempting both widefield targets and some smaller stuff. DSLRs are also compatible with telescopes so should last you a very long time in the hobby.
                                                                    <br /><br />
                                                            <h5>Ball head Mount:</h5><br />

                                                            While not strictly required ballhead mounts allow you to point at any part of the sky easily. They are also useful later on if you decide to use a skytracker (more on this later).<br /><br />


                                                            <h5>Tripod:</h5><br />

                                                            It's great to have a sturdy tripod which won't shake under the weight of the camera.
                                                        </p>

                                                        <hr className='hr-light' />
                                                        <h4>
                                                            Tier 2: Barndoor/Lightweight trackers.
                                                        </h4>
                                                        <hr className='hr-light' />
                                                        <p>
                                                            <h5>The Skytracker:</h5><br />

                                                            This involves putting your DSLR onto a device that can follow the motion of the stars, although not for too long. Usage of a device like this will cause your landscape to appear blurry, but keep your stars relatively intact. Keep in mind, this can look radically different depending on what brand you get, or whether you build it yourself. A common and simple form of home-made tracker is known as a Barndoor tracker. Their functionality remains essentially the same. The one pictured is an iOptron Skytracker though other options with similar functionality include the Skywatcher Star Adventurer and the Vixen Polarie among others.

                                                        </p>

                                                        <hr className='hr-light' />
                                                        <h4>
                                                            Tier 3: Full-sized Equatorial Mounts.
                                                        </h4>
                                                        <hr className='hr-light' />
                                                        <p>
                                                            <h5>German Equatorial Mount:</h5><br />

                                                            Your typical Tier 3 mount looks similar to this. The GEM (German Equatorial Mount) is the workhorse component of the AP rig. Equatorial mounts move at sidereal rate to cancel out earth's rotation. This allows for much longer exposures than a normal tripod, and an increased payload capacity over a skytracker allowing for larger telescopes and longer focal lengths for those small targets. Equatorial mounts also allow guiding for even longer exposures (more on this later)
                                                            <br /><br />

                                                            <h5>Telescope:</h5><br />

                                                            On top of the EQ mount is the imaging telescope. This is the scope that the camera looks though to take a picture. In this case, the imaging scope is an 80mm refractor.
                                                            <br /><br />

                                                            <h5>Guidescope:</h5><br />

                                                            The guide scope gives the autoguider its eyes. The magnification provided by the scope, as well as the extra light make auto-guiding quite accurate and easy. Many rigs use modified finder scopes as their guide scopes. In this case the guidescope is also an 80mm refractor, albeit a cheaper one. High quality glass is important for your main imaging scope, but less important for a guidescope. A simple singlet or doublet works great for this, and doesnt need to be very expensive.
                                                            <br /><br />

                                                            <h5>Autoguider:</h5><br />

                                                            While modern EQ mounts are quite accurate, they still require some help to track an object accurately over several minute exposures. This is where the trusty Autoguider comes in. A little ccd/cmos chip in the camera watches a star closely, and if it moves, the Autoguider sends a signal to the EQ mount's motors to correct for the movement. The addition of an Autoguider to your rig can easily double or triple the exposure times you are able to get. Guide cameras people frequently use are the Starshoot Autoguider, ASI 120mm, or Lodestar. There are many other kinds of guidecams. The guidecam pictured here is an Orion Starshoot Autoguider. Check out the Wiki page on Autoguiding
                                                            <br /><br />

                                                            <h5>Rings:</h5><br />

                                                            In order to mount most telescopes to their mounts, astronomers use a type of clap called tube rings. These rings (marked in bright green) hold the telescope firmly in place. Make sure you buy the right size! Similar to tube rings are guide rings. These act the same as tube rings with one major difference. They allow the scope being held in them to be aimed. This is useful for guide scopes, because sometimes a guidescope needs to be moved to find a suitable star to guide on. This can also induce flexure, so make sure you purchase quality rings. You can also use tube rings for this purpose if you want to avoid flexure, but you will not have as much freedom to find a guide star. This is usually not much of a problem with todays more sensitive guidecams, but can still be an issue when you are shooting objects outside of the galactic plain.
                                                            <br /><br />

                                                            <h5>Counter Weight:</h5><br />

                                                            Telescopes and cameras are heavy! Because of this, equatorial mounts have counter weights. By sliding the weight up and down the counter weight bar, astrophotographers can balance out their rigs, as not to cause damage to the motors in the mount. Depending on your mount, it can be good practice to leave in a slight amount of imbalance to ensure your gears are properly engaged. Typically you want your telescope to be slightly heavier, but not enough to come crashing down. Just enough so that the telescope is always providing a small amount of resistance to being pushed. Overdoing it can also cause problems, so find a good balance.
                                                            <br /><br />

                                                            <h5>Camera:</h5><br />

                                                            This is where your camera goes. In many telescope designs such as Refractors, Schmidt Cassegrains, and Ritchey Chretiens, the camera is placed at the back of the main imaging scope. In Newtonians, your camera will go on the side of your telescope. Try to rotate your telescope so your camera is facing down as it helps with balance.
                                                            <br /><br />

                                                            <h5>Focuser:</h5><br />

                                                            Don't skimp here! by turning the knob, the user can adjust the focus of the telescope. Good focus is needed to obtain sharp crisp images. This focuser is a dual speed 1:10 Crayford. Some focusers can use motors for automation and increased accuracy. Look into Bahtinov masks if you are using a manual focuser as they can be a huge help with achieving perfect focus. There are also focuser upgrades, one of which is a Moonlite focuser, but they are expensive. That said, they are built with a much higher quality and are less prone to tilt.
                                                            <br /><br />

                                                            <h5>Field Flattener:</h5><br />

                                                            This is where your t-adapter, flattener or reducer goes. A flattener helps to correct distortion in some types of telescopes. The camera and t-ring can thread directly into the field flattener or into a standard nosepiece if you aren't using one.
                                                        </p>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            <Card className="gsCard">
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="1">Gear Recommenedations</Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1" className="gsAccordBack">
                                                    <Card.Body>
                                                        <p>
                                                            <h4>Choosing a Camera</h4>
                                                            <hr className='hr-light' />
                                                            <h5>Deep sky:</h5><br />
                                                            There are lots and lots of different cameras out there with which to do astrophotography. We tend to recommend second-hand Canon or Nikon DSLRs due to software support and cost savings, but it's up to you to do research on which one is the best for your needs. DSLRs in general are recommended because they have fully adjustable shooting settings, and shoot in raw formats which don't mess with the data before you get a chance to process it. Generally newer cameras will have lower noise and better sensitivity than older cameras, plenty of great things have been done on old Canon      500Ds and it's unlikely you'll reach the limits of the camera for a long while.
                                                            <br /><br />
                                                            We highly recommend checking out NINA for computer controlling your camera. Its a free and open source program created by /u/isbeorn86. They also have an active Discord server where you can check out the latest builds, leave suggestions, and get rapid support if you have problems with the software, or are just starting out.
                                                            Often you'll hear about IR-modded DSLRs. This process removes the IR block filter from the camera, the purpose of which is to block light outside of the visual spectrum for everyday imaging. This filter presents a problem for imaging nebulae, a lot of which tend to emit in IR, so getting an IR-modded camera will really help to pick up these faint objects. You can expect about a 75% increase in sensitivity in these wavelengths depending on the camera (e.g.). If you can find such a camera premodded for sale it'll be worth picking up. Both Canon and Nikon have made their own IR sensitive DSLRs in the past (e.g. Canon 60Da and Nikon D810), but these are regarded as horribly overpriced. It's often cheaper to do the work yourself if you're confident taking your camera to pieces or to have it done by another company or individual.
                                                            <br /><br />
                                                            <b>Do not buy a Canon 1100D (T3 non-i version)</b> They have issues with sensor bloom or some similar defect which leaves black lines under bright stars at long exposure. See here for example.
                                                            <br /><br />
                                                            Some more advanced users use monochromatic CMOS or CCD cameras. Some of these are cooled and have lower noise than DSLRs but can really only be used for astrophotography. These aren't necessarily recommended for beginners, but if you are serious about getting into the hobby a dedicated mono camera is another great way to start. I will include some information about mono cameras, but they are mostly outside of the scope of this article.
                                                            <br /><br />
                                                            <h5>Planetary:</h5><br />
                                                            Planetary imaging is an entirely different barrel of monkeys to DSOs, as you may be beginning to realize. As the acquisition and processing are totally different (DSO focuses on long exposure with tens to hundreds of frames whereas planetary focuses on short exposures with thousands of frames), it requires a different type of camera entirely. For this reason DSLRs are generally not recommended for planets.
                                                            <br /><br />
                                                            One of the most prevalent planetary camera manufacturers is ZWO, who make the generally low-cost ASI range of cameras. These offer high framerate captures and good sensitivity. Other options are available but this is what I use so it's what I can recommend. A good example of these cameras is the ubiquitous ASI120 which is used by many imagers on the subreddit. Planetary can even be done with modified cheap webcams such as the Microsoft lifecam, as recommended further into the guide. Since high framerate is desirable, USB3 is a good thing to have on your planetary camera and laptop.
                                                            <br /><br />
                                                            Planetary cameras come in mono and color, depending on how much effort you want to put into imaging. Mono has the advantage of sensitivity and some can also be used as effective guidecams for your DSO imaging too. They also allow you to shoot in high IR wavelengths such as CH4. The downside to this is that each channel must be processed separately then combined and colour calibrated, meaning about 4x as much work as taking a single video in color and processing that directly.
                                                            <br /><br />
                                                            DSLRs tend to not be recommended for planetary. It is possible to take pictures of planets, but the only way DSLRs are able to get high enough framerates is using planetary mode in BackyardEOS which records via liveview. This is usually not 1:1 pixel resolution as the sensor is resampled, and this means a lot of detail and definition is lost. The Canon DSLRs which can natively do a 1:1 region of interest are the Canon 60Da, 60D and 550D. DSLRs also tend to have larger pixels than planetary cameras which means the image will appear smaller with the same focal length.
                                                        </p>
                                                        <hr className='hr-light' />
                                                        <p>
                                                            <h4>Planetary and Lunar imaging</h4>
                                                            <hr className='hr-light' />
                                                            Planetary and lunar are one of the easiest and cheapest types of imaging to get into. While tracking certainly helps in planetary it's certainly not required, the most important things are a good camera, a big scope and good atmospheric seeing. While there are only a few targets you can get with a dedicated planetary setup the surface of the planets changes all the time so it's still a very interesting part of the hobby. Planetary imaging is theoretically possible with any telescope, but the bigger the better. For a lot of astronomers it's a good entry to the hobby as they can use their visual telescope without issue.
                                                            <br /><br />
                                                            <h5>$300 - $400 – The moon, some planets</h5>
                                                            <hr className='hr-light' />
                                                            Using a small beginner telescope we can take images of the moon and start to pull out some detail on the larger planets such as Jupiter, Saturn, Venus and Mars. 6" or larger dobsonians can be picked up on craigslist or Ebay for even less than listed here - as a popular beginner scope there tend to be a lot of them floating around. You can find up to 10" of aperture for under $300 if you're lucky. As there's no tracking on this type of telescope you usually need to record a video as the planet drifts through the field of view. You can learn more about stacking planets on our wiki.
                                                            <br /><br />
                                                            Dobsonians >6" also make nice visual telescopes so it'll be good to pick up some eyepieces as well as your camera.
                                                            <br /><br />
                                                            <ul>
                                                                <li>Telescope: Orion 4.5" dobsonian - $250</li>
                                                                <li>Telescope :Orion 6" (slightly more expensive, but a much better option) - $270</li>
                                                                <li>Camera: Orion Starshoot Solar system V imager - $80-$100</li>
                                                                <li>Optional: Save yourself $50-80 by making your own planetary camera! Check out this guide by Gary Honis to see how.</li>
                                                                <li>Camera: Modified Microsoft Lifecam Cinema HD - $20-30 from Ebay.</li>
                                                                <li>1.25" nosepiece adapter: - Free if you disassemble the Barlow included with the scope.</li>
                                                            </ul>
                                                            <br /><br />
                                                            <h5>$400+ – The moon, large planets</h5>
                                                            <hr className='hr-light' />
                                                            At this budget you can do two things - add on to the previous setup or try to find a better scope. It may or may not be worth it for you to add on and you may wish to buy a better telescope instead or save up for one capable of DSOs. As with the previous section buying a second-hand dobsonian could save you a decent chunk of cash, which you can put toward a better planetary imaging camera.
                                                            <br /><br />
                                                            <ul>
                                                                <li>Telescope: Orion Skyquest Xt8 - $380</li>
                                                                <li>Camera: Orion Starshoot Solar system V imager - $80-$100</li>
                                                            </ul>
                                                            <br /><br />
                                                            <h5>Planetary above $500</h5>
                                                            <hr className='hr-light' />
                                                            Planetary above this price is hard to write a guide for because there are so so many options for cameras, telescopes, etc. The ideal planetary setup in our opinion has large aperture, a quality mono camera and equatorial tracking. EQ mounts can also be used for your DSO setup, a lot of us share one mount between the two. You could also stick with the dobsonian from the previous entry but get a better camera.
                                                            <br /><br />
                                                            Option 1:
                                                            <br />
                                                            <ul>
                                                                <li>Telescope: Orion Skyquest Xt8 - $399</li>
                                                                <li>Camera: ZWO ASI120MC (color): $200 on ZWOptical site - $150</li>
                                                            </ul>
                                                            <br /><br />
                                                            Option 2:
                                                            <br />
                                                            <ul>
                                                                <li>Mount: Orion Sirius (new): $1100 new on Orions Website</li>
                                                                <li>OTA: 8" newtonian (new): $500 on Orions website</li>
                                                                <li>Camera: ZWO ASI120MC: $150 on ZWOptical site</li>
                                                            </ul>
                                                            <br /><br />
                                                            Again, you can find these products used on websites like Cloudynights and they will offer significant discounts compared to buying new. While this option is obviously a lot more expensive than the other options, you can use this setup for DSO imaging if you have another camera like a DSLR. That said, it isnt recommended to get started using such a high focal length such as this for DSO's. The sirius mount will be the best upgrade you could make here, as you could easily use it to image DSO's.
                                                            <br /><br />
                                                            Schmidt-Cassegrains are also OK for planetary imaging scopes. The issue with these is their cost to aperture ratio is much higher than newtonians, an 8" SCT is often more than double the price of an 8" newtonian and will not produce noticeably better images. Bigger budgets also allow you to buy larger telescopes and accessories such as barlows, just make sure your mount can handle the extra aperture. Imaging through a dobsonian with a long focal length isn't recommended because tracking is difficult so you won't be able to capture as many frames.

                    

                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            <Card className="gsCard">
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="2">Glossary of Terms</Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2" className="gsAccordBack">
                                                    <Card.Body>
                                                        <p>
                                                            Astrophotography is a big subject and involves a lot of obscure terminology. In order to help you to understand what we're talking about we've attempted to write a glossary of common terms and equipment, how they're used and their effect on the final image.
                                                            <br /><br />
                                                            <h5>AP</h5>
                                                            Astrophotography! It's what we do here.
                                                            <br /><br />
                                                            <h5>Aperture</h5>
                                                            The aperture is the diameter of the opening at the front of the telescope, where light enters. In astrophotography the aperture is fixed.
                                                            <br /><br />
                                                            <h5>Autoguider</h5>
                                                            An autoguider is a small camera, usually attached to a small telescope on top of the imaging telescope. The autoguider plugs into the mount and your computer and monitors a star. If that star moves in the autoguider's field of view it will send a command to the mount to recenter the star. This helps to increase imaging time as guiding can overcome slight polar alignment errors and minimize any drift caused by periodic error. Autoguider Wiki page
                                                            <br /><br />
                                                            <h5>Barlow lens</h5>
                                                            A barlow lens can be placed between a planetary camera and the telescope. Barlows magnify the image by the number of times listed on the barlow - for example a 2x barlow will produced an image that is twice as large. Barlows only tend to be used for planetary and lunar astrophotography.
                                                            <br /><br />
                                                            <h5>CCD</h5>
                                                            A CCD is an advanced type of camera used for astrophotography. They often have more sensitive sensors than DSLRs and employ cooling to reduce noise. Most are monochrome allowing for narrowband imaging which allows capture of specific emission wavelengths from the target.
                                                            <br /><br />
                                                            <h5>Chromatic Aberration</h5>
                                                            In non-apochromatic refractors the light is focused to slightly different points. This can cause colour fringing around stars and planets. Here's a picture of Jupiter with very severe chromatic aberration.
                                                            <br /><br />
                                                            <h5>Collimation</h5>
                                                            Collimation is the alignment of the mirrors in your telescope. It's seen on reflecting telescopes, i.e. newtonians and schmidt-cassegrains. Miscollimation can result in fuzzy planetary images, distortion in your images and an uneven field. There are many guides out there on how to collimate, newtonians can be collimated using a cheshire eyepiece or laser collimator, schmidt-cassegrains can be collimated using a duncan mask or star test.
                                                            <br /><br />
                                                            <h5>Color Zone</h5>
                                                            In posts a lot of people refer to their location as a "red zone" or a "blue zone". This refers to the Bortle zone which is a measurement of light pollution. A more in-depth look at light pollution and its effects on your images can be found here
                                                            <br /><br />
                                                            <h5>Coma</h5>
                                                            Coma is usually an affliction of the reflecting telescope. It's caused by the shape of the mirror, which causes the light to be focused slightly differenly toward the edges of the image. This results in little comet-shaped stars around the edges. An example of uncorrected and corrected coma can be seen in this image.
                                                            <br /><br />
                                                            <h5>Dark/Flat/Bias frames</h5>
                                                            Also known as calibration frames, darks and bias frames are used to reduce electronic noise from the camera and flat frames are used to remove vignettes and dust spots from the telescope. A more in-depth explanation can be found at the DSO stacking page.
                                                            <br /><br />
                                                            <h5>DSOs</h5>
                                                            Deep space objects and stuff outside of our solar system, i.e. galaxies, nebulae and star clusters.
                                                            <br /><br />
                                                            <h5>Field of view</h5>
                                                            The field of view (or FoV) of a telescope is how much sky we can fit onto the camera sensor. It is different depending on both the camera's sensor and the telescope's focal length. A handy tool for calculating your field of view can be found here.
                                                            <br /><br />
                                                            <h5>Field Flattener</h5>
                                                            Some refracting telescopes suffer from distortion toward the edges of the field of view, similar to a fisheye lens though not as pronounced. This can be corrected with a field flattener which slightly changes the way the light travels at the edges of an image. An example of an un-flat field can be found here, notice how the stars toward the corners and edges seem to stretch inward slightly.
                                                            <br /><br />
                                                            <h5>Field rotation</h5>
                                                            Field rotation is an imaging problem most commonly found in alt-azimuth mounts and essentially makes them impossible to use for long exposure astrophotography. If you open up a planetarium program such as Stellarium and turn the speed up you'll notice that as the targets move across the sky they appear to 'rotate' in relation to your position on earth - for example a constellation rising in the east will be upside-down by the time it sets in the west. Equatorial mounts counter this due to their tracking method following the earth's rotation, alt-azimuth mounts can't as they aren't polar aligned and are tracking on two axes. This causes the stars in your image to rotate around the center of the frame.
                                                            <br /><br />
                                                            <h5>Focal length</h5>
                                                            Focal length is the distance from the primary mirror or lens of the telescope to the focal point (in this case the camera's sensor). A longer focal length makes for a smaller field of view and a more zoomed in image.
                                                            <br /><br />
                                                            <h5>Focal ratio</h5>
                                                            The focal ratio is how large the aperture is in relation to the focal length. A fast focal ratio (e.g. F/4) results in images taking less time to expose than a slow focal ratio (e.g. F/10). The focal ratio is worked out by dividing the focal length by the aperture - an 800mm focal length 200mm aperture newtonian will be f/4. Something which is also related to focal ratio is F/stops. This is a list of focal ratios in increments of how long they take to expose - the next F/stop takes twice as long of an exposure to produce the same level of detail.
                                                            <br /><br />
                                                            <h5>F/stop	2.8	4	5.6	8	11	16	22</h5>
                                                            <h5>Exposure time	10s	20s	40s	80s	160s	320s	640s</h5>
                                                            In imaging deep sky objects a fast focal ratio is desirable. For planetary imaging it is not as important.
                                                            <br /><br />
                                                            <h5>Gain</h5>
                                                            Gain is a similar concept to ISO, increasing the sensitivity of the camera chip. Increasing gain can result in increased noise. Gain is the conversion of photons hitting the sensor to the digital readout, so for example at a high gain it would take more electrons hitting a pixel to activate it than at a low gain.
                                                            <br /><br />
                                                            <h5>Guiding</h5>
                                                            Guiding is the task performed by an autoguider in order to correct for deviations in the mount's tracking ability. Images shot without an autoguider rely on the mount's tracking - thereby relying on polar alignment and gear accuracy - and are referred to as "unguided". Unguided images will be more limited in exposure time.
                                                            <br /><br />
                                                            <h5>Guided vs Tracked</h5>
                                                            Saying a shot is guided implies tracking. Tracking is when the mount a telescope is on is motorized. Guiding is when that tracking is supplemented by an Autoguider.
                                                            <br /><br />
                                                            <h5>ISO</h5>
                                                            ISO equates to the sensitivity of film which was used prior to digital cameras. In modern DSLRs the same number of photons is collected regardless of the ISO, but these are converted into pixels at higher or lower rates dependent on it. ISO settings, while amplifying signal, also amplify noise, resulting at higher noise at higher ISOs. There is a point at which the tradeoff between noise and signal amplification is no longer advantageous, this is often referred to as "unity gain". Some people enjoy nitpicking over how unity gain isn't a real thing in DSLRs, but it still remains a valuable analogy. The ideal ISO for many cameras is usually around 800 but varies, especially with newer models.
                                                            <br /><br />
                                                            <h5>Light pollution</h5>
                                                            Light pollution is the light that comes from towns and cities. It turns the sky a lovely shade of orange and can reduce contrast in deep sky objects. It's better for this reason to image in a site far away from towns, or to use a light pollution filter if such a site is unavailable to you.
                                                            <br /><br />
                                                            <h5>NCP</h5>
                                                            North Celestial Pole. This is along the axis on which the earth rotates - if you take a long exposure photograph of the NCP stars will appear to make concentric circles as is often seen in star trail images.
                                                            <br /><br />
                                                            <h5>OTA</h5>
                                                            OTA stands for Optical Tube Assembly. It's a shorter way of saying "telescope".
                                                            <br /><br />
                                                            <h5>Periodic error</h5>
                                                            Mass produced mounts drive the tracking axis through ring gears - mass produced as they are these often have slight imperfections which can cause the telescope to move while tracking. It's called periodic error because it encompasses one period (or revolution) of the ring gear. Periodic error can usually be guided out. The advanced user may benefit from hypertuning their mount.
                                                            <br /><br />
                                                            <h5>Pinched optics</h5>
                                                            Sometimes stresses are put on the mirrors or lenses of the telescope by maladjusted screws and retainers. Disassembling a telescope is not for beginners, if you think your telescope has pinched optics take it to a shop to get it repaired. Here's an example of a Newtonian displaying severe pinched optics due to an improperly installed secondary mirror.
                                                            <br /><br />
                                                            <h5>PA</h5>
                                                            PA is the abbreviation we use for polar alignment.
                                                            <br /><br />
                                                            <h5>Polar alignment</h5>
                                                            In equatorial mounts (the type you should be using for deep sky) the tracking axis (right ascension) must be aligned with the polar axis of the earth. If you think about how the earth rotates and gives the stars the appearance of movement the equatorial mount moves at the same rate in the opposite direction, cancelling out the movement. It's important that the axes are exactly aligned so the tracking is dead on. If the polar alignment is not correct it can cause trailing of the stars in your image and eventually the target will drift out of the field of view. If you'd like to know more about how to do a polar alignment read the full article here.
                                                            <br /><br />
                                                            <h5>Reducer</h5>
                                                            A reducer is similar to a barlow, but works the opposite way. It decreases your focal length and therefore your focal ratio, for example turning your slow f/10 schmidt-cassegrain into a faster f/6.3 imaging system. You can get a reducer for just about any telescope and many of them have field flatteners built in, so if you have a long focal length refractor they are an ideal accessory.
                                                            <br /><br />
                                                            <h5>Seeing</h5>
                                                            Seeing is an important value for planetary imaging. When there is poor seeing this means that there is high atmospheric turbulence which causes your video to wobble or appear under water as currents of air disturb the light entering your camera. This kills detail in planetary work. Seeing isn't really something we can change - we just have to wait for a night with good seeing or try to find an area with less atmospheric turbulence.
                                                            <br /><br />
                                                            <h5>Stacking</h5>
                                                            The definition of stacking depends on whether you're doing it to planetary or deep sky images. The basic goal is to improve the signal-to-noise ratio, allowing for an image that responds better to post-processing.
                                                            Read the deep sky stacking guide here and the planetary stacking guide here
                                                            <br /><br />
                                                            <h5>Star trailing formula</h5>
                                                            When doing wide-angle with a fixed tripod the stars will move and trail based on your focal length and sensor size. The optimal exposure time can be calculated using this exposure calculator
                                                            <br /><br />
                                                            <h5>Tracking</h5>
                                                            Tracking refers to a motorized mount which follows the object of interest. There are three important tracking rates - Sidereal, Solar and Lunar, and each are suitable for different types of targets. Sidereal follows the motion of the stars, Solar the planets and Lunar the moon. Tracking is very important for photographing DSOs and can be improved by guiding or 3rd party services such as Hypertuning. Tracking is not so important for planets but is still very helpful at high magnification.
                                                            <br /><br />
                                                            <h5>Untracked</h5>
                                                            Untracked images are those taken without a motorized mount such as a simple DSLR on a tripod, or a planetary photo taken through a non-motorized telescope. These are limited by the focal length of the instrument, see the star trailing formula above for how long you can expose before noticing star movement.
                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </React.Fragment>

        )
    }
}
