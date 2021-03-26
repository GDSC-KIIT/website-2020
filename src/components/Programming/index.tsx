import classes from '@/styles/programming.module.css';

export default function Programming() {
	return (
		<div>
			<div className={classes.terminalWindow}>
				<header>
					<div className={`${classes.button} ${classes.green}`} />
					<div className={`${classes.button} ${classes.yellow}`} />
					<div className={`${classes.button} ${classes.red}`} />
				</header>
				<section className={classes.terminal}>
					<div className={classes.history} />

					<span className={classes.typedCursor}>
						<div className={classes.console_content}>
							<ul className={classes.x}>
								<li>
									<span className={classes.html_1}>&lt;html&gt;</span>
								</li>
								<li>
									<ul className={classes.no_top_padding}>
										<li>
											<span className={classes.html_1}> &lt;head&gt;</span>
										</li>
										<li>
											<span className={classes.html_1}>&lt;title&gt;</span>
											<span className={classes.html_2}>TECH STACKS</span>
											<span className={classes.html_1}>&lt;/title&gt;</span>
										</li>

										<span className={classes.html_1}>&lt;/head&gt;</span>
										<li>
											<span className={classes.html_1}>&lt;body&gt;</span>
										</li>
										<li>
											<ul className={classes.no_top_padding}>
												<span className={classes.html_1}>&lt;h1&gt;</span>
												<span className={classes.html_2}>
													Exciting technologies which we work on.
												</span>
												<span className={classes.html_1}>&lt;/h1&gt;</span>
												<li>
													<span className={classes.html_1}>
														&lt;ul&gt;
													</span>
												</li>
												<ul className={classes.no_top_padding}>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															Flutter development
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															Web development
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															Android apps development
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															Actions On Google
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															iOS apps development
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															UX/UI design
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															Machine Learning
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>

													<li>
														<span className={classes.html_1}>
															&lt;li&gt;
														</span>
														<span className={classes.html_2}>
															Cloud Computing
														</span>
														<span className={classes.html_1}>
															&lt;/li&gt;
														</span>
													</li>
												</ul>
												<li>
													<span className={classes.html_1}>
														&lt;/ul&gt;
													</span>
												</li>
											</ul>
										</li>
										<li>
											<span className={classes.html_1}>&lt;/body&gt;</span>
										</li>
									</ul>
								</li>
								<li>
									<span className={classes.html_1}>&lt;/html&gt;</span>
								</li>
							</ul>
						</div>
					</span>
				</section>
			</div>
		</div>
	);
}
