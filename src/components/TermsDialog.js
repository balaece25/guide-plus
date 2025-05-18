import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function TermsDialog({ show, onAccept, onDecline }) {
  return (
    <Modal show={show} onHide={onDecline} centered>
      <Modal.Header>
        <Modal.Title>Terms and Conditions for Evidentia</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{maxHeight: '60vh', overflowY: 'auto' }}>
        <p>
Welcome to <b>Evidentia</b>- a <a href='https://www.linkedin.com/company/ranilegal/'>RaniLegal</a> fundraiser by Yaashvanthi Murugan and Zahra
Moloobhoy, designed to guide you through the admissibility ‘flow chart’ of Evidence
Law. </p>

<p>Evidentia is laid out like a ‘choose your own adventure’ tool. You will be asked step-
by-step questions about the piece of evidence you are trying to adduce. As you
select from ‘YES’ or ‘NO’ answers, you’ll be guided to the next relevant threshold or
boundary of admissibility, following the sequence we studied during UTS Evidence
Law this semester (2025- Autumn). If your evidence fails to meet a threshold, you’ll
be advised that it’s likely inadmissible. If it does meet the threshold, you’ll be
informed that it is likely admissible- but only for the specific purpose covered by that
threshold, not overall. Keep in mind that in Evidence Law, your goal is not to reach a
final conclusion on admissibility, but to carefully explore all possible pathways and
limits.</p>

<p>All references to ‘EA’ refer to the Evidence Act 1995 (NSW). The term ‘not
admissible’ is used in place of ‘inadmissible’ to reduce the chance of misreading it as
‘admissible’ during quick reading. Dot points, including those labelled (a), (i), etc, are
used solely for ease of interpretation and do not correspond to subsection
numbering in the legislation.</p>

<p>Our UTS Evidence professors and tutors have expressed a clear preference for
students to create their own study notes. <b> Evidentia is best used as a tool to help
you build those notes- ensuring you work through the key admissibility thresholds
we’ve covered during the semester in a clear and structured way. It is not a
comprehensive exam answer generator and does not contain enough analysis,
case law, or detailed legislative references for you to rely on it alone.</b> Some topics,
such as the Right to Silence and its implications, have been deliberately omitted, as
they don’t fit neatly into the site’s threshold-based structure. These areas require
your full discretion and deeper analysis.</p>

<p>By using Evidentia, you acknowledge you understand your general obligations per
the UTS academic integrity guidelines. Evidentia should be treated as a student-
created study resource- similar to tools like Quizlet. Our creation, sharing, and your
use of Evidentia (in accordance with your academic responsibilities) do not breach
any UTS policies. These can be found here:<br/>
<a href='https://www.uts.edu.au/about/leadership-governance/governance/rules/student-
rules/section-16#r16.2'>https://www.uts.edu.au/about/leadership-governance/governance/rules/student-rules/section-16#r16.2</a>
</p>
<p>You further acknowledge that Evidentia may contain minor errors or inconsistencies
in legislation or information, though we’ve taken great care to be as accurate and
thorough as possible.References to legislation have been reworded for clarity and
ease of understanding, and may not reflect the exact phrasing of the Evidence Act.</p>

<p>Always cross check your notes with legislation. The Evidence Act 1995 (NSW) is
accessible here:<br/>
<a href='https://legislation.nsw.gov.au/view/html/inforce/current/act-1995-025'>https://legislation.nsw.gov.au/view/html/inforce/current/act-1995-025</a>
</p>
<p><b>EVIDENTIA WAS ORIGINALLY GOING TO BE A PAID-ACCESS TOOL FOR
FUNDRAISING PURPOSES- BUT WE DECIDED AGAINST IT. WE WANTED TO MAKE IT
AS ACCESSIBLE AS POSSIBLE FOR EVERYONE. WE ALSO RUSHED TO RELEASE IT IN
TIME FOR YOU TO USE WHILE PREPARING YOUR STUDY NOTES, WHICH MEANS WE
HAVEN’T HAD TIME TO ADD A SITE TRAFFIC ANALYSER TO SEE HOW MANY OF YOU
WE’VE BEEN ABLE TO HELP. 
IF EVIDENTIA HELPS YOU PANIC A LITTLE LESS ABOUT THE EVIDENCE EXAM, LET US
KNOW! [<a href='mailto:Connect@ranilegal.au'>Connect@ranilegal.au</a>] AND, HELP US EXPAND BY CONTACTING US!</b><br/>
Good luck!
</p>
<b>Zahra+Yaash</b><br/>
Co-founders, <em>RaniLegal</em><br/>
<a href='https://www.linkedin.com/company/ranilegal/'>Linkedin.com/company/ranilegal</a><br/>
<a href='mailto:Connect@ranilegal.au'>Connect@ranilegal.au</a>
        
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onAccept}>
       <b> AGREE AND CONTINUE!</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TermsDialog;
