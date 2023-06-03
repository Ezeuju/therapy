import React, { useState } from 'react';
import { MDBAccordion, MDBAccordionItem, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

  const toggleCollapse = (collapseId) => {
    if (collapseId === 1) {
      setCollapse1(!collapse1);
    } else if (collapseId === 2) {
      setCollapse2(!collapse2);
    } else if (collapseId === 3) {
      setCollapse3(!collapse3);
    }
    else if (collapseId === 4) {
      setCollapse4(!collapse4);
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBAccordion borderless show initialActive={1}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        Is tranquil therapy right for me?
                                    </>}
          
            >
              
              Professional therapy through Tranquil can help your child to deal and cope with various issues such as anxiety, stress, self-esteem, depression, bullying, eating disorders, relationships, anger, and more. It can help your child be more successful in developing coping skills and it provides them with a resource that is available to help them when they need guidance and support.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={2}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; How much does it cost?
                                    
                </>
              }
              onClick={() => toggleCollapse(2)}
              isExpanded={collapse2}
            >
          The cost of therapy through Teen Counseling ranges from $60 to $90 per week (billed every 4 weeks) and it is based on your location, preferences, and therapist availability. You can cancel your membership at any time, for any reason.
                                                                                                            
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={3}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        Who are the therapists?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(3)}
              // isExpanded={collapse3}
            >
              
              Therapists on TeenCounseling.com are licensed, trained, experienced, and accredited psychologists (PhD / PsyD), licensed marriage and family therapists (LMFT), licensed clinical social Workers (LCSW / LMSW), or licensed professional therapists (LPC). All of them have a Masters Degree or a Doctoral Degree in their field. They have been qualified and certified by their state's professional board after successfully completing the necessary education, exams, training, and practice. While their experience, expertise, and background vary, they all possess at least 3 years and 1,000 hours of hands-on experience.
                                                                    
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={4}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        Is TeenCounseling.com a substitute for traditional face to face therapy? 
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
           
           The professionals who work through TeenCounseling.com are licensed and credentialed therapists who have been certified by their state's board to provide therapy. However, while the service may have similar benefits in some cases, it is not able to substitute traditional face-to-face therapy in every case. Please note that TeenCounseling.com therapists will not be able to make any official diagnosis, fulfill any court order, or prescribe medication.

                                                                    
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={5}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp;  Will my teen be working with the same therapist, or different therapists?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
      
      The professionals who work through TeenCounseling.com are licensed and credentialed therapists who have been certified by their state's board to provide therapy. However, while the service may have similar benefits in some cases, it is not able to substitute traditional face-to-face therapy in every case. Please note that TeenCounseling.com therapists will not be able to make any official diagnosis, fulfill any court order, or prescribe medication.

                                                                    
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={6}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        Will my teen be working with the same therapist, or different therapists?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
             
             Your teen will be assigned the one therapist to work with for as long as they participate with TeenCounseling.com. However, if you wish, you can always switch to another therapist on the platform.

                                                                    
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={7}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        
                  How does the communication with the therapist work?
                                    
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
              <p>
                                                                            Therapy is done in four ways:
</p><ul>
  <li>Exchanging messages with therapists</li>
  <li>Chatting live with therapists</li>
  <li>Speaking over the phone with therapist</li>
  <li>Video Conferencing with therapist</li>
  </ul>
  <p>
You can use different ways at different times as you wish, based on your needs, availability, and convenience.
                                                                    </p>
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={8}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        How does messaging work?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
           <p>
                                                                            You and your child will each get a therapy room which will be your personal and secured place to communicate with the therapist. There will be two separate rooms - one for you and one for your teen.<br/>
In the therapy room, you and your child can send messages to the therapist at any time, from anywhere, using any Internet-connected device. The room is open 24/7 and since messaging is not in real-time it doesn't require scheduling. Instead, you (or your child) can choose whenever you want to write or respond to your therapist. You will get a notification by email when the therapist has sent you a message.
                                                                     
</p>
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={9}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        How do live chat sessions work?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
           
           It can be sometimes useful to have a text conversation with your therapist in real-time. This way you can still enjoy the convenience of messaging but also enjoy a "live" interaction that allows instant response and feedback from the therapist.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={10}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        How do live phone sessions work?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
          
          Phone sessions are a great way to conveniently speak with your therapist by simply using your landline or cell phone, no matter where you are.

To talk with your therapist over the phone, you will need to schedule a time with your therapist and log in to your therapy room at that time. The therapist will prompt you to start the phone session and the system will ask you for your phone number. The system will then call you at that number and connect you with your therapist to start the phone session. Please note that the phone number you enter will not be shared with the therapist.
                                                                    
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={11}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        How do live video sessions work?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
              <p>
                                                                            You can also have a video session with your therapist where you will be able to see each other and talk with each other in a virtual face-to-face setting (similar to Skype).</p>
            <ul>
              <li>If you're using a computer or laptop: Make sure you are using Chrome or Firefox as your web browser. Video sessions are not currently supported in Internet Explorer and Safari browsers. </li>
            </ul>
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={12}
              headerTitle={
                <>
                  <MDBIcon fas icon="question-circle" /> &nbsp; 
                                        What is the role of TeenCounseling.com?
                                    
                </>
              }
              // onHeaderClick={() => toggleCollapse(4)}
              // isExpanded={collapse4}
            >
              
              The service is provided by independent providers who work directly with their clients. These providers are not employees of Teen Counseling and the site doesn't oversee them professionally. Our mission is to build, maintain, and support a platform that lets users and therapists communicate effectively, and to facilitate this channel so they can get the most out of their interaction.
                                                                    
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
